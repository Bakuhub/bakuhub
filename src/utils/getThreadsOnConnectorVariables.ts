import {capitalize} from "@mui/material";
import {getTableNameByConnectType} from "./getTableNameByConnectType";
import {ThreadConnectConfig} from "../store/slices/threadSlice";

export const getThreadsOnConnectorVariables = ({
                                                   id, type
                                               }: ThreadConnectConfig) => {

    const tableName = getTableNameByConnectType(type);
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