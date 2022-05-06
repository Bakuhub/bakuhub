import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPremisesOnTimelinesArgs } from "./args/DeleteManyPremisesOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPremisesOnTimelinesResolver {
    deleteManyPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPremisesOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
