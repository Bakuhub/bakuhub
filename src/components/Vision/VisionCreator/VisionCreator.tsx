import {FunctionComponent} from "react";
import {
    ApolloCache, DefaultContext, MutationFunctionOptions, OperationVariables, useMutation
} from "@apollo/client";
import {Vision} from "prisma/generated/type-graphql";
import {createVisionMutation} from "src/gql/mutation/createVisionMutation";
import CreatorBase from "src/components/CreatorBase";
import {ConnectType} from "../../../types";
import {useRouter} from "next/router";
import get from "lodash/get";
import {MergeRequestType} from "@components/CreatorBase/CreatorBase";
import {createMergeRequestMutation} from "@gql/mutation/createMergeRequestMutation";

export interface CreatePremiseProps {
    vision: Vision;
}

export const VisionCreator: FunctionComponent<CreatePremiseProps> = ({vision}) => {
    const router = useRouter();
    const [createNewVision] = useMutation(createVisionMutation);
    const [createMergeRequest] = useMutation(createMergeRequestMutation);
    const handleSubmitCallback = () => router.push(`/premise/${vision.premiseId}/vision/${vision.id}`);
    const getTagLabels = (): string[] => {
        if (vision.tagsOnVisions) {
            return vision.tagsOnVisions.reduce(
                    (acc: string[], tagsOnVision) =>
                            tagsOnVision.tag ?
                                    [...acc, tagsOnVision.tag.label]:acc,
                    []
            );
        }
        return [];
    };
    const handleSubmit = (
            data: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined,
            mergeRequestType?: MergeRequestType
    ) => {
        if (mergeRequestType === MergeRequestType.update) {
            return createNewVision(data);
        } else {
            return createMergeRequest(data);


        }
    };
    return <CreatorBase
            premiseId={vision.premiseId}
            currentVisionId={vision.id}
            connectType={ConnectType.VISION}
            initialValue={
                {
                    description: vision.description || "",
                    title: vision.title || "",
                    activityDate: vision.activityDate || undefined,
                    thumbnail: vision.thumbnail || "",
                    snapshots: get(vision, "reference.snapshots", []),
                    tagLabels: getTagLabels()
                }
            } handleSubmit={handleSubmit}
            isMergeRequest
            handleSubmitCallback={
                handleSubmitCallback
            }
    />;
};