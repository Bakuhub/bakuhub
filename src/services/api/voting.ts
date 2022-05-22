import {handlePromise} from "../handlePromise";
import {ConnectConfig} from "../../types";
import get from "lodash/get";
import {OptionsObject, SnackbarKey, SnackbarMessage} from "notistack";
import {VoteType} from "../../components/Voting";
import {getCreateVoteVariables} from "../../gql/utils/getCreateVoteVariables";

export interface Voting extends ConnectConfig {
    userId: string;
    vote: VoteType;
    enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
    createVote: (variables: any) => Promise<any>;
}

export const voting = async ({
                                 id, type
                                 , vote, userId, createVote, enqueueSnackbar,
                             }: Voting) => {
    if (id) {
        const result = await handlePromise(createVote(getCreateVoteVariables({
                                                                                 id,
                                                                                 vote,
                                                                                 type,
                                                                                 userId
                                                                             })));
        const errors = get(result, "networkError.result.errors", []);
        if (errors.length > 0) {
            errors.forEach((error: { message: string }) => enqueueSnackbar(
                    error.message,
                    {variant: "error"}
            ));
        } else {
            return result;
        }
    } else {
        enqueueSnackbar("Please select a id", {variant: "error"});
    }
};
