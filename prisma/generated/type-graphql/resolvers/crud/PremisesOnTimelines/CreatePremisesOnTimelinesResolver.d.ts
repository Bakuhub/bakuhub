import { GraphQLResolveInfo } from "graphql";
import { CreatePremisesOnTimelinesArgs } from "./args/CreatePremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
export declare class CreatePremisesOnTimelinesResolver {
    createPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreatePremisesOnTimelinesArgs): Promise<PremisesOnTimelines>;
}
