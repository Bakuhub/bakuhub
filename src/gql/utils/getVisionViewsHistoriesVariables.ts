export const getVisionViewsHistoriesVariables = (userId: string) => (
        {
            variables:
                    {
                        "where": {
                            "userId": {
                                "equals": userId
                            }
                        }
                    }
        }
);
