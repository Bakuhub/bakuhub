export interface GetCreateTimelineVariables {
    title: string;
    description: string;
    userId: string;
    premiseIds: string[];

}

export const getCreateTimelineVariables = ({
                                               title, description, userId, premiseIds
                                           }: GetCreateTimelineVariables
) => {
    return {
        variables: {
            data: {
                description, title,
                status: null,
                author: {
                    connect: {
                        id: userId
                    }
                },
                "premisesOnTimelines": {
                    "createMany": {
                        "data": premiseIds.map(premiseId => (
                                {premiseId}
                        ))
                    }
                }
            }
        }
    };
};