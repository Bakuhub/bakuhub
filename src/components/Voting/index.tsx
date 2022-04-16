import * as React from "react";
import {FunctionComponent} from "react";
import get from "lodash/get";
import {useQuery} from "@apollo/client";
import {ConnectConfig} from "../../types";
import {getUserIdBySession} from "../../utils/getUserIdBySession";
import {useSession} from "next-auth/react";
import {useSnackbar} from "notistack";
import {MaterialUIIcons} from "../../constants/MaterialUIIcons";
import Icon from "@mui/material/Icon";
import {getVotesByIdArgs} from "../../gql/helper/getVotesByIdArgs";
import {voting} from "../../services/api/voting";
import {getVoteByUserArgs} from "../../gql/helper/getVoteByUserArgs";
import IconButton from "@mui/material/IconButton";
import {Grid, Typography} from "@mui/material";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {getTableNameWithId} from "../../utils/getTableNameWithId";

export enum VoteType {
    LIKE = 1,
    DISLIKE = -1,
    NEUTRAL = 0
}

export interface ReactionButtonsProps extends ConnectConfig {
    createVote: (variables: any) => Promise<any>;
}

export const VotingButton: FunctionComponent<ReactionButtonsProps> = ({type, id, createVote}) => {
    const session = useSession();
    const [vote, setVote] = React.useState<number | null>(null);
    const {enqueueSnackbar} = useSnackbar();
    const {
        data: votesData,
        error: reactionError,
        refetch: refetchReaction
    } = useQuery(...getVotesByIdArgs(id?[id]:[], type));
    const {
        data: voteByUserData, loading: loadingReactionByUser,
        refetch: refetchReactionByUser
    } = useQuery(...getVoteByUserArgs({
                                          type,
                                          id,
                                          userId: getUserIdBySession(session)
                                      }));
    const currentVote = get(voteByUserData, "votes.vote");

    const handleVoting = async (nextVote: number) => {
        setVote(nextVote);
        const userId = getUserIdBySession(session);
        switch (true) {
            case (
                    !userId
            ): {
                enqueueSnackbar("You need to login to perform this action", {variant: "error"});
                break;
            }
            case(
                    !id
            ): {
                enqueueSnackbar("No vision is selected", {variant: "error"});
                break;
            }
            default: {

                await voting({
                                 id,
                                 type,
                                 vote: nextVote,
                                 createVote,
                                 userId: userId, enqueueSnackbar,
                             });
                refetchReactionByUser();
                refetchReaction();
            }
        }
        setVote(null);
    };
    const getVotingCount = (votesCountData: any) => {
        if (votesCountData) {
            const tableName = getTableNameByConnectType(type);
            const tableNameWithId = getTableNameWithId(tableName);
            const groupByVotesOnVision =  get(votesCountData, "groupByVotesOnVision", []);
            const selectedVision = groupByVotesOnVision.find((groupByVotesOnVision: { [x: string]: string | null | undefined; }) => groupByVotesOnVision[tableNameWithId] === id);
            return get( selectedVision,"_sum.vote", 0);
        } else {
            return 0;
        }
    };
    return <Grid item container alignItems={"center"}>
        <IconButton onClick={() => handleVoting(VoteType.LIKE)}>
            <Icon>{currentVote === VoteType.LIKE ? MaterialUIIcons.thumb_up_alt
                                                 :MaterialUIIcons.thumb_up_off_alt}</Icon>
        </IconButton>
        <Typography>
                {getVotingCount(votesData)}
        </Typography>
        <IconButton onClick={() => handleVoting(VoteType.DISLIKE)}>
            <Icon>
                {currentVote === VoteType.DISLIKE
                 ? MaterialUIIcons.thumb_down_alt
                 :MaterialUIIcons.thumb_down_off_alt}
            </Icon>
        </IconButton>

    </Grid>;
};
export default VotingButton;
