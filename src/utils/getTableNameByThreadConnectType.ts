import {ThreadConnectType} from "../types";

export const getTableNameByThreadConnectType = (threadConnectType: ThreadConnectType, isCapital: boolean = false) => {
    switch (threadConnectType) {
        case ThreadConnectType.VISION:
            return "vision";
        case ThreadConnectType.MERGE_REQUEST:
            return "mergeRequest";
        case ThreadConnectType.PREMISE:
            return "premise";
        case ThreadConnectType.TIMELINE:
            return "timeline";
    }
};