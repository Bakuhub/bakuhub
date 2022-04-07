import { GraphQLResolveInfo } from "graphql";
import { CreateManyThreadsOnMergeRequestArgs } from "./args/CreateManyThreadsOnMergeRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyThreadsOnMergeRequestResolver {
    createManyThreadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: CreateManyThreadsOnMergeRequestArgs): Promise<AffectedRowsOutput>;
}
