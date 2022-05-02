import { GraphQLResolveInfo } from "graphql";
import { CreateManySubscriptionsOnTimelinesArgs } from "./args/CreateManySubscriptionsOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySubscriptionsOnTimelinesResolver {
    createManySubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateManySubscriptionsOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
