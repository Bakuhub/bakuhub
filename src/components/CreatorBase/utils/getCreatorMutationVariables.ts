import {getAuthorVariableByUserId} from "@gql/utils/getAuthorVariableByUserId";
import {getCreateTagVariable} from "@gql/utils/getCreateTagVariable";
import {Snapshot} from "prisma/generated/type-graphql";
import {ConnectType, LabelType} from "src/types";
import {getCreateOrConnectLabelVariables} from "@gql/utils/getCreateOrConnectLabelVariables";
import {MergeRequestType} from "@components/CreatorBase/CreatorBase";

interface IGetCreatorMutationVariables {
    userId: string;
    title: string;
    description: string;
    activityDate: Date;
    tagLabels: string[];
    attachment: string;
    connectType: ConnectType;
    snapshots: Snapshot[];
    mergeRequestLabels: LabelType[];
    currentVisionId?: string;
    premiseId?: string;
    mergeRequestTitle: string;
    mergeRequestType: MergeRequestType;
    mergeRequestDescription: string;
}

export const getCreatorMutationVariables = ({
                                                mergeRequestType,
                                                mergeRequestLabels,
                                                premiseId, currentVisionId,
                                                mergeRequestTitle, mergeRequestDescription,
                                                connectType,
                                                userId,
                                                title,
                                                attachment,
                                                description, activityDate,
                                                tagLabels,
                                                snapshots
                                            }: IGetCreatorMutationVariables) => {
    const baseVisionVariables = {
        title,
        activityDate,
        description,
        tagsOnVisions: {
            create: tagLabels.map(label => getCreateTagVariable(label))
        },
        "reference": {
            "create": {
                "snapshots": {
                    connect: snapshots.map(({id}) => (
                            {
                                id
                            }
                    ))
                }
            }
        },
        "thumbnail": attachment,
    };
    const baseMergeRequestVariables = {
        "title": mergeRequestTitle,
        "description": mergeRequestDescription,
        labelsOnMergeRequest: {
            create: mergeRequestLabels.map(label => getCreateOrConnectLabelVariables(
                    label))
        }

    };
    switch (true) {
        case connectType === ConnectType.VISION && mergeRequestType === MergeRequestType.update:
            return {
                variables: {
                    "data": {
                        ...baseVisionVariables,
                        "author": {
                            "connect": {
                                "id": userId
                            }
                        },
                        "mergeRequest": {
                            "create": baseMergeRequestVariables
                        },
                        "draftMode": true,

                        "premise": {
                            "connect": {
                                "id": premiseId
                            }
                        },
                        "prevVision": {
                            "connect": {
                                "id": currentVisionId
                            }
                        },
                    }
                }
            };
        case connectType === ConnectType.VISION && mergeRequestType === MergeRequestType.create:
            return {
                variables: {
                    data: {
                        ...baseMergeRequestVariables,
                        vision: {
                            connect: {
                                id: currentVisionId
                            }
                        },
                        "relationChanges": {
                            "create": [
                                {
                                    "targetVision": {
                                        "connect": {
                                            "id": currentVisionId
                                        }
                                    },
                                    ...getAuthorVariableByUserId(userId),
                                    draftMode: true,
                                    "relation": "Rebuttal",
                                    "sourceVision": {
                                        "connectOrCreate": {
                                            "create": {
                                                ...baseVisionVariables,
                                                ...getAuthorVariableByUserId(userId),
                                                "premise": {
                                                    "create": {
                                                        title,
                                                        ...getAuthorVariableByUserId(userId),
                                                    }
                                                },
                                            },
                                            "where": {
                                                "id": "null"
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            };
        case connectType === ConnectType.PREMISE:
        default:
            return {
                variables: {
                    data: {
                        ...getAuthorVariableByUserId(userId),
                        title,
                        status: "REFERENCE_PROVIDED",
                        vision: {
                            create: [
                                {
                                    "thumbnail": attachment,
                                    title,
                                    description,
                                    activityDate,
                                    tagsOnVisions: {
                                        create: tagLabels.map(label => getCreateTagVariable(label))
                                    },
                                    "reference": {
                                        "create": {
                                            "snapshots": {
                                                connect: snapshots.map(({id}) => (
                                                        {
                                                            id
                                                        }
                                                ))
                                            }
                                        }
                                    },
                                    ...getAuthorVariableByUserId(userId),
                                }
                            ]
                        }
                    }
                }
            };

    }
};