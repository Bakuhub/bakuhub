import { GraphQLResolveInfo } from "graphql";
import { FindFirstPremisesOnTimelinesArgs } from "./args/FindFirstPremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
export declare class FindFirstPremisesOnTimelinesResolver {
    findFirstPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindFirstPremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null>;
}
