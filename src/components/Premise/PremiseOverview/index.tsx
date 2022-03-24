import * as React from "react";
import {Premise, Vision} from "../../../../prisma/generated/type-graphql";
import {get} from "lodash";
import {VisionDetail} from "../../Vision/Detail/VisionDetail";

function PremiseOverview({premise}: { premise: Premise }) {
    const vision: Vision = get(premise, "vision[0]");
    return <VisionDetail vision={vision} premiseId={premise.id}/>;
}


export default PremiseOverview;