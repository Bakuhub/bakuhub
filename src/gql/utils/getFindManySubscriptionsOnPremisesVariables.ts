export interface GetFindManySubscriptionsOnPremisesVariableProps {
    take?: number;
    skip?: number;
    userId: string;
}

export const getFindManySubscriptionsOnPremisesVariables = ({
                                                                take, skip, userId
                                                            }: GetFindManySubscriptionsOnPremisesVariableProps) => (
        {

            variables: {
                take: take || 10,
                skip: skip || 0,
                "orderBy": [
                    {
                        "updatedAt": "desc"
                    }
                ],
                "where": {
                    "userId": {
                        "equals": userId
                    }
                }
            }
        }
);