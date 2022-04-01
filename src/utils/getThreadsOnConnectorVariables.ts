import {capitalize} from "@mui/material";
import {getTableNameByThreadConnectType} from "./getTableNameByThreadConnectType";
import {ThreadConnectConfig} from "../store/slices/threadSlice";

export const getThreadsOnConnectorVariables = ({
                                                   id, type
                                               }: ThreadConnectConfig) => {

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