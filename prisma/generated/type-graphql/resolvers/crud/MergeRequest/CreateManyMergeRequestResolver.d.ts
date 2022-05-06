import { GraphQLResolveInfo } from "graphql";
import { CreateManyMergeRequestArgs } from "./args/CreateManyMergeRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMergeRequestResolver {
    createManyMergeRequest(ctx: any, info: GraphQLResolveInfo, args: CreateManyMergeRequestArgs): Promise<AffectedRowsOutput>;
}
