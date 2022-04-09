import {ConnectType} from "../types";

export const getTableNameByConnectType = (threadConnectType: ConnectType, isCapital: boolean = false) => {
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