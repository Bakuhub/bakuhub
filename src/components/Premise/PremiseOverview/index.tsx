import * as React from "react";
import {Premise} from "../../../../prisma/generated/type-graphql";
import {VisionDetail} from "../../Vision/Detail/VisionDetail";
import {getActiveVisionFromPremise} from "../../../utils/getActiveVisionFromPremise";

function PremiseOverview({premise}: { premise: Premise }) {
    const vision = getActiveVisionFromPremise(premise);
    if (vision)
        return <VisionDetail vision={vision} premiseId={premise.id}/>;
    return <div>
        {premise.id} cant find related vision
    </div>;
}


export default PremiseOverview;