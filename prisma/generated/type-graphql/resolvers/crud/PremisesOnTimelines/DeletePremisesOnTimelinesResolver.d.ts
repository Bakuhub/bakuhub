import { GraphQLResolveInfo } from "graphql";
import { DeletePremisesOnTimelinesArgs } from "./args/DeletePremisesOnTimelinesArgs";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
export declare class DeletePremisesOnTimelinesResolver {
    deletePremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeletePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null>;
}
