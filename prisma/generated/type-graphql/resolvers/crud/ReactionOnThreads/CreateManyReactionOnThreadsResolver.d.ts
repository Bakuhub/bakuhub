import { GraphQLResolveInfo } from "graphql";
import { CreateManyReactionOnThreadsArgs } from "./args/CreateManyReactionOnThreadsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReactionOnThreadsResolver {
    createManyReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: CreateManyReactionOnThreadsArgs): Promise<AffectedRowsOutput>;
}
