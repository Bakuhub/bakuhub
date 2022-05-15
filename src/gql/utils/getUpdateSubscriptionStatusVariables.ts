interface GetUpdateSubscriptionStatusVariablesProps {
    status: "ACTIVE" | "INACTIVE",
    userId: string,
    premiseId: string,
}

export const getUpdateSubscriptionStatusVariables = ({

                                                         status, userId, premiseId
                                                     }: GetUpdateSubscriptionStatusVariablesProps) => (
        {
            variables: {
                "data": {
                    "status": {
                        "set": status
                    }
                },
                "where": {
                    "userId_premiseId": {
                        premiseId, userId
                    }
                }
            }
        }
);
