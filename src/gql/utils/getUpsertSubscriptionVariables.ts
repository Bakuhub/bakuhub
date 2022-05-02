import {ConnectConfig} from "../../types";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {getTableNameWithId} from "../../utils/getTableNameWithId";

interface GetUpsertSubscriptionVariables extends ConnectConfig {
    userId: string;
    subscriptionMode?: "AUTO" | "MANUAL";
}

export const getUpsertSubscriptionVariables = ({
                                                   subscriptionMode, userId, type, id
                                               }: GetUpsertSubscriptionVariables) => {
    const tableName = getTableNameByConnectType(type);
    const tableNameWithId = getTableNameWithId(tableName);
    return (
            {
                variables: {

                    where: {
                        [`userId_${tableNameWithId}`]: {
                            userId,
                            [tableNameWithId]: id
                        }
                    },
                    create: {
                        type: subscriptionMode,
                        [tableName]: {
                            connect: {
                                id
                            }
                        },
                        user: {
                            connect: {
                                id: userId
                            }
                        }
                    },
                    update: {
                        ...subscriptionMode ? {
                            type: {
                                set: subscriptionMode
                            }
                        }:{},
                        lastReadAt: {
                            set: new Date()
                        }
                    }
                }
            }
    );
};