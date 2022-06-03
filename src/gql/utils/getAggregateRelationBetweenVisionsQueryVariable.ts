export interface GetAggregateRelationBetweenVisionsQueryVariable {
    draftMode?: boolean;
    sourceVisionId?: string;
    searchMode: "AND" | "OR";
    targetVisionId?: string;
}

export const getAggregateRelationBetweenVisionsQueryVariable = ({
                                                                    targetVisionId, sourceVisionId,
                                                                    draftMode, searchMode
                                                                }: GetAggregateRelationBetweenVisionsQueryVariable) => {


    return {
        variables: {
            "where": {
                "draftMode": {
                    "equals": !!draftMode
                },
                [searchMode]: [
                    sourceVisionId ? {
                        "sourceVisionId": {
                            "equals": sourceVisionId
                        }
                    }:{}
                    ,
                    targetVisionId ? {
                        "targetVisionId": {
                            "equals": targetVisionId
                        }
                    }:{}
                ]
            }
        }
    };
};