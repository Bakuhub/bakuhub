import {ConnectConfig} from "../../types";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {getTableNameWithId} from "../../utils/getTableNameWithId";

export const getUpdateManySubscriptionsVariables = (
        {type, id}: ConnectConfig
) => {
    const tableName = getTableNameByConnectType(type);
    const tableNameWithId = getTableNameWithId(tableName);
    return {
        variables: {

            "where": {
                "AND": [
                    {
                        [tableNameWithId]: {
                            "equals": id
                        },
                        "lastReadAt": {
                            "lte": new Date()
                        }
                    }
                ]
            },
            "data": {
                "hasUnreadNotifications": {
                    "set": true
                }
            }
        }
    };
};