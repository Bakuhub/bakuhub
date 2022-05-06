import { GraphQLResolveInfo } from "graphql";
import { FindManyPremisesOnTimelinesArgs } from "./args/FindManyPremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
export declare class FindManyPremisesOnTimelinesResolver {
    findManyPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindManyPremisesOnTimelinesArgs): Promise<PremisesOnTimelines[]>;
}
