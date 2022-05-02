import {ConnectType} from "../types";
import {capitalize} from "@mui/material";

export const getTableNameByConnectType = (threadConnectType: ConnectType, isCapital: boolean = false): string => {
    const getTableName = () => {
        switch (threadConnectType) {
            case ConnectType.VISION:
                return "vision";
            case ConnectType.MERGE_REQUEST:
                return "mergeRequest";
            case ConnectType.PREMISE:
                return "premise";
            case ConnectType.TIMELINE:
                return "timeline";
            case ConnectType.THREAD:
                return "thread";
            default:
                return "";
        }
    };
    const tableName = getTableName();
    return isCapital ? capitalize(tableName):tableName;
};