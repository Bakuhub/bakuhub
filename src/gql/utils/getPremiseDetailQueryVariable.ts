export const getPremiseDetailQueryVariable = (premiseId: string) => (
        {
            variables: {
                "where": {
                    "id": premiseId
                },
                "visionWhere2": {
                    "OR": [
                        {
                            "draftMode": {
                                "equals": true
                            }
                        }, {
                            "AND": [
                                {
                                    "draftMode": {
                                        "equals": false
                                    },
                                    "nextVisions": {
                                        "every": {
                                            "draftMode": {
                                                "equals": true
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        }
);