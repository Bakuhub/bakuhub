export interface CreateTimelineVariablesProps {
    title: string;
    description: string;

    userId?: string;
    premisesOnTimeline: Array<string>;
}

export const getCreateTimelineVariables = ({
                                               title, userId, description, premisesOnTimeline
                                           }: CreateTimelineVariablesProps) => {
    return {
        variables: {
            "data": {
                title,
                description,
                ...userId ? {
                    "author": {
                        "connect": {
                            "id": userId
                        }
                    }
                }:{}
                ,
                "premisesOnTimelines": {
                    "premise": {
                        "connect": {
                            "id": premisesOnTimeline
                        }
                    }
                }
            }
        }
    };

};