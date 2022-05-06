import { GraphQLResolveInfo } from "graphql";
import { UpsertPremisesOnTimelinesArgs } from "./args/UpsertPremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
export declare class UpsertPremisesOnTimelinesResolver {
    upsertPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpsertPremisesOnTimelinesArgs): Promise<PremisesOnTimelines>;
}
