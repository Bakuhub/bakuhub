import { GraphQLResolveInfo } from "graphql";
import { CreateManyPremisesOnTimelinesArgs } from "./args/CreateManyPremisesOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPremisesOnTimelinesResolver {
    createManyPremisesOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateManyPremisesOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
