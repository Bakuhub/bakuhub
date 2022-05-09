export const getVisionWithMergeRequestByPremiseIdVariables = (premiseId: string) => {

    return {
        variables: {
            "where": {

                "AND": [
                    {
                        "premiseId": {
                            "equals": premiseId
                        }
                        , "mergeRequest": {
                            "is": {
                                "status": {
                                    "equals": "OPEN"
                                }
                            }
                        },
                    },
                ]
            }
        }
    };
};