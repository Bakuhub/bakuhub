import {FunctionComponent} from "react";
import {useMutation} from "@apollo/client";
import {Vision} from "prisma/generated/type-graphql";
import {createVisionMutation} from "src/gql/mutation/createVisionMutation";
import CreatorBase from "src/components/CreatorBase";
import {ConnectType} from "../../../types";
import {useRouter} from "next/router";
import get from "lodash/get";

export interface CreatePremiseProps {
    vision: Vision;
}

export const VisionCreator: FunctionComponent<CreatePremiseProps> = ({vision}) => {
    const router = useRouter();
    const [createNewVision] = useMutation(createVisionMutation);
    const handleSubmitCallback = () => router.push(`/premise/${vision.premiseId}`);
    console.info(vision);
    const getTagLabels = (): string[] => {
        if (vision.tagsOnVisions) {
            return vision.tagsOnVisions.reduce((acc: string[], tagsOnVision) =>
                                                       tagsOnVision.tag ?
                                                               [...acc, tagsOnVision.tag.label]:acc, []);
        }
        return [];
    };
    console.info(vision.tagsOnVisions);
    console.info(getTagLabels());
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
            } handleSubmit={createNewVision}
            isMergeRequest
            handleSubmitCallback={
                handleSubmitCallback
            }
    />;
};