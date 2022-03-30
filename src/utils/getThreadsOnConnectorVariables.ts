import {ThreadConnectType} from "../types";
import {capitalize} from "@mui/material";

interface GetThreadsOnConnectorVariablesProps {
    id: string | null;
    type: ThreadConnectType;
}

export const getThreadsOnConnectorVariables = ({
                                                   id, type
                                               }: GetThreadsOnConnectorVariablesProps) => {
    const getTableName = () => {
        switch (type) {
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
    const tableName = getTableName();
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