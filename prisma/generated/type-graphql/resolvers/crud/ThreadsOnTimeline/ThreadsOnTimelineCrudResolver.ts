import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnTimelineArgs } from "./args/AggregateThreadsOnTimelineArgs";
import { CreateManyThreadsOnTimelineArgs } from "./args/CreateManyThreadsOnTimelineArgs";
import { CreateThreadsOnTimelineArgs } from "./args/CreateThreadsOnTimelineArgs";
import { DeleteManyThreadsOnTimelineArgs } from "./args/DeleteManyThreadsOnTimelineArgs";
import { DeleteThreadsOnTimelineArgs } from "./args/DeleteThreadsOnTimelineArgs";
import { FindFirstThreadsOnTimelineArgs } from "./args/FindFirstThreadsOnTimelineArgs";
import { FindManyThreadsOnTimelineArgs } from "./args/FindManyThreadsOnTimelineArgs";
import { FindUniqueThreadsOnTimelineArgs } from "./args/FindUniqueThreadsOnTimelineArgs";
import { GroupByThreadsOnTimelineArgs } from "./args/GroupByThreadsOnTimelineArgs";
import { UpdateManyThreadsOnTimelineArgs } from "./args/UpdateManyThreadsOnTimelineArgs";
import { UpdateThreadsOnTimelineArgs } from "./args/UpdateThreadsOnTimelineArgs";
import { UpsertThreadsOnTimelineArgs } from "./args/UpsertThreadsOnTimelineArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateThreadsOnTimeline } from "../../outputs/AggregateThreadsOnTimeline";
import { ThreadsOnTimelineGroupBy } from "../../outputs/ThreadsOnTimelineGroupBy";

@TypeGraphQL.Resolver(_of => ThreadsOnTimeline)
export class ThreadsOnTimelineCrudResolver {
  @TypeGraphQL.Query(_returns => ThreadsOnTimeline, {
    nullable: true
  })
  async threadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ThreadsOnTimeline, {
    nullable: true
  })
  async findFirstThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ThreadsOnTimeline], {
    nullable: false
  })
  async threadsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyThreadsOnTimelineArgs): Promise<ThreadsOnTimeline[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnTimeline, {
    nullable: false
  })
  async createThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateThreadsOnTimelineArgs): Promise<ThreadsOnTimeline> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyThreadsOnTimelineArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnTimeline, {
    nullable: true
  })
  async deleteThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnTimeline, {
    nullable: true
  })
  async updateThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateThreadsOnTimelineArgs): Promise<ThreadsOnTimeline | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyThreadsOnTimelineArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyThreadsOnTimelineArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnTimeline, {
    nullable: false
  })
  async upsertThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertThreadsOnTimelineArgs): Promise<ThreadsOnTimeline> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateThreadsOnTimeline, {
    nullable: false
  })
  async aggregateThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThreadsOnTimelineArgs): Promise<AggregateThreadsOnTimeline> {
    return getPrismaFromContext(ctx).threadsOnTimeline.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ThreadsOnTimelineGroupBy], {
    nullable: false
  })
  async groupByThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByThreadsOnTimelineArgs): Promise<ThreadsOnTimelineGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnTimeline.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
