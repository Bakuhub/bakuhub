import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadArgs } from "./args/AggregateThreadArgs";
import { CreateManyThreadArgs } from "./args/CreateManyThreadArgs";
import { CreateThreadArgs } from "./args/CreateThreadArgs";
import { DeleteManyThreadArgs } from "./args/DeleteManyThreadArgs";
import { DeleteThreadArgs } from "./args/DeleteThreadArgs";
import { FindFirstThreadArgs } from "./args/FindFirstThreadArgs";
import { FindManyThreadArgs } from "./args/FindManyThreadArgs";
import { FindUniqueThreadArgs } from "./args/FindUniqueThreadArgs";
import { GroupByThreadArgs } from "./args/GroupByThreadArgs";
import { UpdateManyThreadArgs } from "./args/UpdateManyThreadArgs";
import { UpdateThreadArgs } from "./args/UpdateThreadArgs";
import { UpsertThreadArgs } from "./args/UpsertThreadArgs";
import { Thread } from "../../../models/Thread";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateThread } from "../../outputs/AggregateThread";
import { ThreadGroupBy } from "../../outputs/ThreadGroupBy";
export declare class ThreadCrudResolver {
    thread(ctx: any, info: GraphQLResolveInfo, args: FindUniqueThreadArgs): Promise<Thread | null>;
    findFirstThread(ctx: any, info: GraphQLResolveInfo, args: FindFirstThreadArgs): Promise<Thread | null>;
    threads(ctx: any, info: GraphQLResolveInfo, args: FindManyThreadArgs): Promise<Thread[]>;
    createThread(ctx: any, info: GraphQLResolveInfo, args: CreateThreadArgs): Promise<Thread>;
    createManyThread(ctx: any, info: GraphQLResolveInfo, args: CreateManyThreadArgs): Promise<AffectedRowsOutput>;
    deleteThread(ctx: any, info: GraphQLResolveInfo, args: DeleteThreadArgs): Promise<Thread | null>;
    updateThread(ctx: any, info: GraphQLResolveInfo, args: UpdateThreadArgs): Promise<Thread | null>;
    deleteManyThread(ctx: any, info: GraphQLResolveInfo, args: DeleteManyThreadArgs): Promise<AffectedRowsOutput>;
    updateManyThread(ctx: any, info: GraphQLResolveInfo, args: UpdateManyThreadArgs): Promise<AffectedRowsOutput>;
    upsertThread(ctx: any, info: GraphQLResolveInfo, args: UpsertThreadArgs): Promise<Thread>;
    aggregateThread(ctx: any, info: GraphQLResolveInfo, args: AggregateThreadArgs): Promise<AggregateThread>;
    groupByThread(ctx: any, info: GraphQLResolveInfo, args: GroupByThreadArgs): Promise<ThreadGroupBy[]>;
}