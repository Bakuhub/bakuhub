import { GraphQLResolveInfo } from "graphql";
import { CreateManySupscriptionsOnTimelinesArgs } from "./args/CreateManySupscriptionsOnTimelinesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySupscriptionsOnTimelinesResolver {
    createManySupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateManySupscriptionsOnTimelinesArgs): Promise<AffectedRowsOutput>;
}
