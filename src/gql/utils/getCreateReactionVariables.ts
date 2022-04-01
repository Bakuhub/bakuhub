import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {ConnectConfig} from "../../types";

export enum Reaction {
    LIKE = "LIKE",
    UPVOTE = "UPVOTE",
    DOWNVOTE = "DOWNVOTE",
}

export interface ReactionConnectConfig extends ConnectConfig {
    reaction: Reaction;
    userId: string;
}

export const getCreateReactionVariables = ({type, id, reaction, userId}: ReactionConnectConfig) => {
    const tableName = getTableNameByConnectType(type);
    return {
        variables: {
            "data": {
                reaction,
                [tableName]: {
                    "connect": {
                        id
                    }
                },
                "user": {
                    "connect": {
                        "id": userId
                    }
                }
            }
        }
    };
};