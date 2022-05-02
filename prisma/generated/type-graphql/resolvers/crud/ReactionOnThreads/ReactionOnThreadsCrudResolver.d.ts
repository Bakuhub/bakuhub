import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnThreadsArgs } from "./args/AggregateReactionOnThreadsArgs";
import { CreateManyReactionOnThreadsArgs } from "./args/CreateManyReactionOnThreadsArgs";
import { CreateReactionOnThreadsArgs } from "./args/CreateReactionOnThreadsArgs";
import { DeleteManyReactionOnThreadsArgs } from "./args/DeleteManyReactionOnThreadsArgs";
import { DeleteReactionOnThreadsArgs } from "./args/DeleteReactionOnThreadsArgs";
import { FindFirstReactionOnThreadsArgs } from "./args/FindFirstReactionOnThreadsArgs";
import { FindManyReactionOnThreadsArgs } from "./args/FindManyReactionOnThreadsArgs";
import { FindUniqueReactionOnThreadsArgs } from "./args/FindUniqueReactionOnThreadsArgs";
import { GroupByReactionOnThreadsArgs } from "./args/GroupByReactionOnThreadsArgs";
import { UpdateManyReactionOnThreadsArgs } from "./args/UpdateManyReactionOnThreadsArgs";
import { UpdateReactionOnThreadsArgs } from "./args/UpdateReactionOnThreadsArgs";
import { UpsertReactionOnThreadsArgs } from "./args/UpsertReactionOnThreadsArgs";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReactionOnThreads } from "../../outputs/AggregateReactionOnThreads";
import { ReactionOnThreadsGroupBy } from "../../outputs/ReactionOnThreadsGroupBy";
export declare class ReactionOnThreadsCrudResolver {
    findUniqueReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReactionOnThreadsArgs): Promise<ReactionOnThreads | null>;
    findFirstReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: FindFirstReactionOnThreadsArgs): Promise<ReactionOnThreads | null>;
    findManyReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: FindManyReactionOnThreadsArgs): Promise<ReactionOnThreads[]>;
    createReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: CreateReactionOnThreadsArgs): Promise<ReactionOnThreads>;
    createManyReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: CreateManyReactionOnThreadsArgs): Promise<AffectedRowsOutput>;
    deleteReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: DeleteReactionOnThreadsArgs): Promise<ReactionOnThreads | null>;
    updateReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: UpdateReactionOnThreadsArgs): Promise<ReactionOnThreads | null>;
    deleteManyReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReactionOnThreadsArgs): Promise<AffectedRowsOutput>;
    updateManyReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReactionOnThreadsArgs): Promise<AffectedRowsOutput>;
    upsertReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: UpsertReactionOnThreadsArgs): Promise<ReactionOnThreads>;
    aggregateReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: AggregateReactionOnThreadsArgs): Promise<AggregateReactionOnThreads>;
    groupByReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: GroupByReactionOnThreadsArgs): Promise<ReactionOnThreadsGroupBy[]>;
}