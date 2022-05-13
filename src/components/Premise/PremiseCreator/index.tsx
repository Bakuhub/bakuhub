import * as React from "react";
import {Premise} from "../../../../prisma/generated/type-graphql";
import {FetchResult, useMutation} from "@apollo/client";
import CreatorBase from "../../CreatorBase";
import {createPremiseMutation} from "../../../gql/mutation/createPremiseMutation";
import {useRouter} from "next/router";
import {ConnectType} from "../../../types";
import get from "lodash/get";

export enum Reaction {
    UPVOTE = "UPVOTE",
    DOWNVOTE = "DOWNVOTE"
}

interface PremiseDetailProps {
    premise: Premise;
}


export const PremiseCreator: React.FunctionComponent<PremiseDetailProps> = ({premise}) => {
    const router = useRouter();
    const defaultPremiseInitialState = {
        activityDate: new Date(),
        description: "",
        title: "",
        snapshots: [],
        thumbnail: "",
        tagLabels: []
    };
    const [createPremise,] = useMutation(createPremiseMutation);
    const handleSubmitCallback = (result: FetchResult<{ createPremise: { id: string } }>) => {
        if (result.data && result.data.createPremise) {
            console.info("created premise", result.data);
            return router.push(`/premise/${result.data.createPremise.id}/vision/${get(
                    result,
                    "data.createPremise.vision[0].id"
            )}`);
        }
    };
    return <CreatorBase
            connectType={ConnectType.PREMISE}
            initialValue={defaultPremiseInitialState}
            handleSubmit={createPremise}
            handleSubmitCallback={handleSubmitCallback}
    />;

};
export default PremiseCreator;