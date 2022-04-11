import {ConnectConfig} from "../../types";
import {VoteType} from "../../components/Voting";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {getTableNameWithId} from "../../utils/getTableNameWithId";

export interface VoteConnectConfig extends ConnectConfig {
    vote: VoteType;
    userId: string;
}

export const getCreateVoteVariables = (
        {
            userId, id, vote, type
        }: VoteConnectConfig
) => {
    const tableName = getTableNameByConnectType(type);
    const tableNameWithId = getTableNameWithId(tableName);
    return {
        variables: {
            "where": {
                [`userId_${tableNameWithId}`]: {
                    userId,
                    [tableNameWithId]: id
                }
            },
            "update": {
                "vote": {
                    "set": vote
                }
            },
            "create": {
                vote,
                "user": {
                    "connect": {
                        "id": userId
                    },

                },
                [tableName]: {
                    "connect": {
                        id
                    }
                }

            }
        }
    };
};