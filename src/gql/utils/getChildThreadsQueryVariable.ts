export const getChildThreadsQueryVariable = (parentThreadId: string) => {
    return {
        variables: {
            "where": {
                "parentThreadId": {
                    "equals": parentThreadId
                }
            }
        }
    };
};
