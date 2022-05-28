import {getAuthorVariableByUserId} from "../../../gql/utils/getAuthorVariableByUserId";
import {getCreateTagVariable} from "../../../gql/utils/getCreateTagVariable";
import {Snapshot} from "../../../../prisma/generated/type-graphql";
import {ConnectType, LabelType} from "../../../types";
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
    switch (true) {
        case connectType === ConnectType.VISION && mergeRequestType === MergeRequestType.update:
            return {
                variables: {
                    "data": {
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
                        }, "thumbnail": attachment,
                        "draftMode": true,
                        "author": {
                            "connect": {
                                "id": userId
                            }
                        },
                        "mergeRequest": {
                            "create": {
                                "title": mergeRequestTitle,
                                "description": mergeRequestDescription,
                                labelsOnMergeRequest: {
                                    create: mergeRequestLabels.map(label => getCreateOrConnectLabelVariables(
                                            label))
                                }
                            }
                        },
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
                        ...getAuthorVariableByUserId(userId),
                        title,
                        status: "REFERENCE_PROVIDED",
                        vision: {
                            create: [
                                {
                                    thumbnail: attachment,
                                    title,
                                    description,
                                    activityDate,
                                    tagsOnVisions: {
                                        create: tagLabels.map(label => getCreateTagVariable(label))
                                    },
                                    "targeting": {
                                        "create": [
                                            {
                                                "targetedBy": {
                                                    "connect": {
                                                        "id": currentVisionId
                                                    }
                                                },
                                                "relation": "Refutation"
                                            }
                                        ]
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