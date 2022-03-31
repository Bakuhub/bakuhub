import {ThreadConnectType} from "../../types";
import {getTableNameByThreadConnectType} from "../../utils/getTableNameByThreadConnectType";
import {capitalize} from "lodash";

export interface GetThreadQueryVariableProps {
    threadConnectType: ThreadConnectType;
    id: string;
}

export const getThreadsQueryVariable = ({threadConnectType, id}: GetThreadQueryVariableProps) => {
    const tableName = getTableNameByThreadConnectType(threadConnectType);
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
