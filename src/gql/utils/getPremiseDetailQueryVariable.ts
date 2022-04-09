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

                            "OR": [
                                {
                                    "draftMode": {
                                        "equals": false
                                    },
                                    "AND": [
                                        {
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
                    ]
                }
            }
        }
);