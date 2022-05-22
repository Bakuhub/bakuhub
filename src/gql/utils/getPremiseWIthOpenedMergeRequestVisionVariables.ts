export const getPremiseWIthOpenedMergeRequestVisionVariables = (id: string) => {
    return {
        variables: {
            where: {
                id
            },
            visionWhere2: {
                mergeRequest: {
                    is: {
                        status: {
                            equals: "OPEN"
                        }
                    }
                }
            }
        }
    };

};