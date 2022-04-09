import {handlePromise} from "../handlePromise";
import {CreateReactionVariables, getCreateReactionVariables} from "../../gql/utils/getCreateReactionVariables";
import {ConnectConfig} from "../../types";
import {get} from "lodash";
import {Reaction} from "../../components/Premise/PremiseDetail";
import {OptionsObject, SnackbarKey, SnackbarMessage} from "notistack";

export interface AddReaction extends ConnectConfig {
    reaction: Reaction;
    userId: string;
    enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
    createReaction: (variables: CreateReactionVariables) => Promise<any>;
}

export const addReaction = async ({
                                      id, type
                                      , reaction, userId, createReaction, enqueueSnackbar,
                                  }: AddReaction) => {
    if (id) {
        const result = await handlePromise(createReaction(getCreateReactionVariables({
            id,
            reaction,
            type,
            userId
        })));
        const errors = get(result, "networkError.result.errors", []);
        if (errors.length > 0) {
            errors.forEach((error: { message: string }) => enqueueSnackbar(error.message, {variant: "error"}));
        } else {
            return result;
        }
    } else {
        enqueueSnackbar("Please select a id", {variant: "error"});
    }
};
