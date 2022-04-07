import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPremisesOnTimelinesArgs } from "./args/UpdateManyPremisesOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPremisesOnTimelinesResolver {
    updateManyPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPremisesOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
