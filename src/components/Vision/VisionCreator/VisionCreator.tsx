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
                    tagLabels: []
                    // vision.tagsOnVisions?.reduce((acc, tagsOnVision) => {
                    //                                     const tag: Tag | undefined = tagsOnVision.tag;
                    //                                     return tag ? [
                    //                                                 ...acc, tag.label
                    //                                             ]
                    //                                                :acc;
                    //                                 }
                    // , [])
                }
            } handleSubmit={createNewVision} handleSubmitCallback={
        handleSubmitCallback
    }/>;
};