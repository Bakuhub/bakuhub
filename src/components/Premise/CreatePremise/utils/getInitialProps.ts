import get from "lodash/get";
import {Premise} from "../../../../../prisma/generated/type-graphql";
import {getActiveVisionFromPremise} from "../../../../utils/getActiveVisionFromPremise";

export const getInitialProps = (premise: Premise, propertyName: string) => {
    if (!premise) return "";
    const activeVision = getActiveVisionFromPremise(premise);
    return get(activeVision, propertyName, "");
};