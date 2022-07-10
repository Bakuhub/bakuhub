export const getPremiseIdsQueryVariables = ({premiseIdKeyword}: {
    premiseIdKeyword: string
}) => {
    return {
        variables: {
            where: {
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
                        title: {
                            contains: premiseIdKeyword
                        }
                    }
                ]
            }
        }
    };
};