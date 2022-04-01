import {ConnectType} from "../../types";
import {getTableNameByConnectType} from "../../utils/getTableNameByConnectType";
import {capitalize} from "lodash";

export interface GetThreadQueryVariableProps {
    threadConnectType: ConnectType;
    id: string;
}

export const getThreadsQueryVariable = ({threadConnectType, id}: GetThreadQueryVariableProps) => {
    const tableName = getTableNameByConnectType(threadConnectType);
    return {
        variables: {
            "where": {
                [`threadsOn${capitalize(tableName)}`]: {
                    "is": {
                        [`${tableName}Id`]: {
                            "equals": id
                        }
                    }
                }
            }
        }
    };
};
