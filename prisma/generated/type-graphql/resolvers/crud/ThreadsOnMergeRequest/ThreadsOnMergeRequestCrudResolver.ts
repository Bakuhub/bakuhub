import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnMergeRequestArgs } from "./args/AggregateThreadsOnMergeRequestArgs";
import { CreateManyThreadsOnMergeRequestArgs } from "./args/CreateManyThreadsOnMergeRequestArgs";
import { CreateThreadsOnMergeRequestArgs } from "./args/CreateThreadsOnMergeRequestArgs";
import { DeleteManyThreadsOnMergeRequestArgs } from "./args/DeleteManyThreadsOnMergeRequestArgs";
import { DeleteThreadsOnMergeRequestArgs } from "./args/DeleteThreadsOnMergeRequestArgs";
import { FindFirstThreadsOnMergeRequestArgs } from "./args/FindFirstThreadsOnMergeRequestArgs";
import { FindManyThreadsOnMergeRequestArgs } from "./args/FindManyThreadsOnMergeRequestArgs";
import { FindUniqueThreadsOnMergeRequestArgs } from "./args/FindUniqueThreadsOnMergeRequestArgs";
import { GroupByThreadsOnMergeRequestArgs } from "./args/GroupByThreadsOnMergeRequestArgs";
import { UpdateManyThreadsOnMergeRequestArgs } from "./args/UpdateManyThreadsOnMergeRequestArgs";
import { UpdateThreadsOnMergeRequestArgs } from "./args/UpdateThreadsOnMergeRequestArgs";
import { UpsertThreadsOnMergeRequestArgs } from "./args/UpsertThreadsOnMergeRequestArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateThreadsOnMergeRequest } from "../../outputs/AggregateThreadsOnMergeRequest";
import { ThreadsOnMergeRequestGroupBy } from "../../outputs/ThreadsOnMergeRequestGroupBy";

@TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest)
export class ThreadsOnMergeRequestCrudResolver {
  @TypeGraphQL.Query(_returns => ThreadsOnMergeRequest, {
    nullable: true
  })
  async threadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ThreadsOnMergeRequest, {
    nullable: true
  })
  async findFirstThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ThreadsOnMergeRequest], {
    nullable: false
  })
  async threadsOnMergeRequests(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest, {
    nullable: false
  })
  async createThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyThreadsOnMergeRequestArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest, {
    nullable: true
  })
  async deleteThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest, {
    nullable: true
  })
  async updateThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyThreadsOnMergeRequestArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyThreadsOnMergeRequestArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest, {
    nullable: false
  })
  async upsertThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateThreadsOnMergeRequest, {
    nullable: false
  })
  async aggregateThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThreadsOnMergeRequestArgs): Promise<AggregateThreadsOnMergeRequest> {
    return getPrismaFromContext(ctx).threadsOnMergeRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ThreadsOnMergeRequestGroupBy], {
    nullable: false
  })
  async groupByThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequestGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
