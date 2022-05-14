export const getVisionViewsHistoriesVariables = (userId: string) => (
        {
            variables:
                    {
                        "where": {},
                        "orderBy": [
                            {
                                "createdAt": "desc"
                            }
                        ]
                    }
        }
);
