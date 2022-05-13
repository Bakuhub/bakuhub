export const getCreateVisionViewsHistoryVariable = (
        visionId: string,
        userId: string,
) => (
        {
            variables: {
                data: {
                    vision: {
                        connect: {
                            id: visionId
                        }
                    },
                    user: {
                        connect: {
                            id: userId
                        }
                    }
                }
            }
        }
);