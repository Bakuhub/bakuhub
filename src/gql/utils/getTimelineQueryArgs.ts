import {timelineQuery} from "../query/timelineQuery";
import {DocumentNode} from "@apollo/client/link/core/types";

const getTimelineQueryVariables = ({timelineId}: {
    timelineId: string
}) => (
        {
            variables: {
                "where": {
                    "id": timelineId
                },
                "visionWhere2": {
                    "AND": [
                        {
                            "nextVisions": {
                                "every": {
                                    "draftMode": {
                                        "equals": true
                                    }
                                }
                            },
                            "draftMode": {
                                "equals": false
                            }
                        }
                    ]
                }
            }
        }
);
export const getTimelineQueryArgs = (timelineId: string): [
    DocumentNode, {
        variables:
                {
                    where: { id: string };
                    visionWhere2: {
                        AND: {
                            draftMode: {
                                equals: boolean
                            };
                            nextVisions: { every: { draftMode: { equals: boolean } } }
                        }[]
                    }
                }
    }
] => [
    timelineQuery,
    getTimelineQueryVariables(
            {timelineId})
];
