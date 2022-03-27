import {Premise, Vision} from "../../prisma/generated/type-graphql";

export const getActiveVisionFromPremise = (premise: Premise): Vision | undefined => premise.vision?.find(vision => {
    const isVisionLive = !vision.draftMode;
    const isVisionLatestVersionOfPremise = !vision.nextVision?.some(vision => !vision.draftMode);
    return isVisionLatestVersionOfPremise
            && isVisionLive;
});