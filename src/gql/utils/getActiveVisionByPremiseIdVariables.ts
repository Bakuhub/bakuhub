export const getActiveVisionByPremiseIdVariables = (premiseId: string) => {
    return {
        variables: {
            where: {
                id: premiseId,
            },
            visionWhere2: {
                AND: [
                    {
                        nextVisions: {
                            every: {
                                draftMode: {
                                    equals: true
                                }
                            }
                        },
                        draftMode: {
                            equals: false
                        },
                    }
                ]
            }
        }
    };
};