import { GraphQLResolveInfo } from "graphql";
import { UpdatePremisesOnTimelinesArgs } from "./args/UpdatePremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
export declare class UpdatePremisesOnTimelinesResolver {
    updatePremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdatePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null>;
}
