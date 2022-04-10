import LoadingButton from "@mui/lab/LoadingButton";
import * as React from "react";
import {FunctionComponent} from "react";
import get from "lodash/get";
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
import {MaterialUIIcons} from "../../constants/MaterialUIIcons";
import Icon from "@mui/material/Icon";

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
    } = useQuery(...getReactionByIdArgs(id || "", type));
    console.info(reactionData);
    console.info("====================");
    console.info("====================");
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
        if (reactionData) {
            const selectedReactionData = get(reactionData, reaction, []);
            console.info(selectedReactionData);
            console.info("this is the selected reaction data");
            if (selectedReactionData) return selectedReactionData._count.reaction;
        }
        return 0;
    };
    return <>
        <LoadingButton
                loading={(
                                 voting === Reaction.UPVOTE
                         ) || loadingReactionByUser}
                startIcon={
                    <Icon>
                        {currentReaction === Reaction.UPVOTE ? MaterialUIIcons.thumb_up_alt
                                                             :MaterialUIIcons.thumb_up_off_alt}
                    </Icon>
                }
                variant={"outlined"}
                onClick={() => handleReaction(Reaction.UPVOTE)}>
            {getReactionCount("upVotes")}
        </LoadingButton>
        <LoadingButton startIcon={<Icon>
            {currentReaction === Reaction.DOWNVOTE ? MaterialUIIcons.thumb_down_alt
                                                   :MaterialUIIcons.thumb_down_off_alt}
        </Icon>}
                       loading={(
                                        voting === Reaction.DOWNVOTE
                                ) || loadingReactionByUser}
                       variant={"outlined"}
                       onClick={() => handleReaction(Reaction.DOWNVOTE)}>
            {getReactionCount("downVotes")}
        </LoadingButton>
    </>;
};
export default ReactionButtons;
