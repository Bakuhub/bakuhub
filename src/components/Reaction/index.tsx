import {LoadingButton} from "@mui/lab";
import {ThumbDownAlt, ThumbDownOffAlt, ThumbUpAlt} from "@mui/icons-material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import * as React from "react";
import {FunctionComponent} from "react";
import {find, get} from "lodash";
import {useQuery} from "@apollo/client";
import {getReactionByIdArgs} from "../../gql/helper/getReactionByIdArgs";
import {getReactionByUserArgs} from "../../gql/helper/getReactionByUserArgs";
import {ConnectConfig} from "../../types";
import {getUserIdBySession} from "../../utils/getUserIdBySession";
import {addReaction} from "../../services/api/addReaction";
import {useSession} from "next-auth/react";
import {Reaction} from "../Premise/PremiseDetail";
import {useSnackbar} from "notistack";
import {CreateReactionVariables} from "../../gql/utils/getCreateReactionVariables";
import {getTableNameWithId} from "../../utils/getTableNameWithId";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";

export interface ReactionButtonsProps extends ConnectConfig {
    createReaction: (variables: CreateReactionVariables) => Promise<any>;

}

export const ReactionButtons: FunctionComponent<ReactionButtonsProps> = ({type, id, createReaction}) => {
    const session = useSession();
    const [voting, setVoting] = React.useState<Reaction | null>();
    const {enqueueSnackbar} = useSnackbar();
    const {
        data: reactionData,
        error: reactionError,
        refetch: refetchReaction
    } = useQuery(...getReactionByIdArgs(id ? [id]:[], type));

    const {
        data: reactionByUserData, loading: loadingReactionByUser,
        refetch: refetchReactionByUser
    } = useQuery(...getReactionByUserArgs({
                                              type,
                                              id,
                                              userId: getUserIdBySession(session)
                                          }));
    const currentReaction = get(reactionByUserData, "reactionByUser.reaction");
    const handleReaction = async (reaction: Reaction) => {
        setVoting(reaction);
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

                await addReaction({
                                      id,
                                      type,
                                      reaction,
                                      createReaction,
                                      userId: userId, enqueueSnackbar,
                                  });
                refetchReactionByUser();
                refetchReaction();
            }
        }
        setVoting(null);
    };

    const getReactionCount = (reaction: string) => {
        console.info(reactionData);
        console.info("this is reaction data");
        if (reactionData) {
            const selectedReactionData = get(reactionData, reaction, []);
            const tableNameWithId = getTableNameWithId(getTableNameByConnectType(type));
            const selectedReactionDataById = find(
                    selectedReactionData,
                    (reaction: { visionId: string }) => get(reaction, tableNameWithId) === id
            );
            if (selectedReactionDataById) return selectedReactionDataById._count._all;
        }
        return 0;
    };
    return <>
        <LoadingButton
                loading={(
                                 voting === Reaction.UPVOTE
                         ) || loadingReactionByUser}
                startIcon={
                    currentReaction === Reaction.UPVOTE ? <ThumbUpAlt/>:<ThumbUpOffAltIcon/>}
                variant={"outlined"}
                onClick={() => handleReaction(Reaction.UPVOTE)}>
            {getReactionCount("upVotes")}
        </LoadingButton>
        <LoadingButton startIcon={currentReaction === Reaction.DOWNVOTE ? <ThumbDownAlt/>:<ThumbDownOffAlt/>}
                       loading={(
                                        voting === Reaction.DOWNVOTE
                                ) || loadingReactionByUser}
                       variant={"outlined"}
                       onClick={() => handleReaction(Reaction.DOWNVOTE)}>
            {getReactionCount("downVotes")}
        </LoadingButton>
    </>;
};