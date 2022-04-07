import { GraphQLResolveInfo } from "graphql";
import { FindUniquePremisesOnTimelinesArgs } from "./args/FindUniquePremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
export declare class FindUniquePremisesOnTimelinesResolver {
    findUniquePremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindUniquePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null>;
}
