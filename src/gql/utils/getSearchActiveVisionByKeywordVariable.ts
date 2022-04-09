export const getSearchActiveVisionByKeywordVariable = (keyword: string) => (
        {
            variables: {
                "where": {
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
                        }, {
                            "OR": [
                                {
                                    "title": {
                                        "contains": keyword
                                    },

                                }, {
                                    "description": {
                                        "contains": keyword
                                    }
                                }
                            ],
                        }
                    ]
                }

            }
        }
);
