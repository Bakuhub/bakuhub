import {ThreadConnectType} from "../types";
import {capitalize} from "@mui/material";
import {getTableNameByThreadConnectType} from "./getTableNameByThreadConnectType";

interface GetThreadsOnConnectorVariablesProps {
    id: string | null;
    type: ThreadConnectType;
}

export const getThreadsOnConnectorVariables = ({
                                                   id, type
                                               }: GetThreadsOnConnectorVariablesProps) => {

    const tableName = getTableNameByThreadConnectType(type);
    const res = {
        [`threadsOn${capitalize(tableName)}`]: {
            "create": {
                [tableName]: {
                    "connect": {
                        id
                    }
                }
            }
        }
    };
    return res;
};