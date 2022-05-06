import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnVisionArgs } from "./args/AggregateThreadsOnVisionArgs";
import { CreateManyThreadsOnVisionArgs } from "./args/CreateManyThreadsOnVisionArgs";
import { CreateThreadsOnVisionArgs } from "./args/CreateThreadsOnVisionArgs";
import { DeleteManyThreadsOnVisionArgs } from "./args/DeleteManyThreadsOnVisionArgs";
import { DeleteThreadsOnVisionArgs } from "./args/DeleteThreadsOnVisionArgs";
import { FindFirstThreadsOnVisionArgs } from "./args/FindFirstThreadsOnVisionArgs";
import { FindManyThreadsOnVisionArgs } from "./args/FindManyThreadsOnVisionArgs";
import { FindUniqueThreadsOnVisionArgs } from "./args/FindUniqueThreadsOnVisionArgs";
import { GroupByThreadsOnVisionArgs } from "./args/GroupByThreadsOnVisionArgs";
import { UpdateManyThreadsOnVisionArgs } from "./args/UpdateManyThreadsOnVisionArgs";
import { UpdateThreadsOnVisionArgs } from "./args/UpdateThreadsOnVisionArgs";
import { UpsertThreadsOnVisionArgs } from "./args/UpsertThreadsOnVisionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateThreadsOnVision } from "../../outputs/AggregateThreadsOnVision";
import { ThreadsOnVisionGroupBy } from "../../outputs/ThreadsOnVisionGroupBy";

@TypeGraphQL.Resolver(_of => ThreadsOnVision)
export class ThreadsOnVisionCrudResolver {
  @TypeGraphQL.Query(_returns => ThreadsOnVision, {
    nullable: true
  })
  async threadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueThreadsOnVisionArgs): Promise<ThreadsOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ThreadsOnVision, {
    nullable: true
  })
  async findFirstThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstThreadsOnVisionArgs): Promise<ThreadsOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ThreadsOnVision], {
    nullable: false
  })
  async threadsOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyThreadsOnVisionArgs): Promise<ThreadsOnVision[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnVision, {
    nullable: false
  })
  async createThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateThreadsOnVisionArgs): Promise<ThreadsOnVision> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyThreadsOnVisionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnVision, {
    nullable: true
  })
  async deleteThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteThreadsOnVisionArgs): Promise<ThreadsOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnVision, {
    nullable: true
  })
  async updateThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateThreadsOnVisionArgs): Promise<ThreadsOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyThreadsOnVisionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyThreadsOnVisionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ThreadsOnVision, {
    nullable: false
  })
  async upsertThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertThreadsOnVisionArgs): Promise<ThreadsOnVision> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateThreadsOnVision, {
    nullable: false
  })
  async aggregateThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThreadsOnVisionArgs): Promise<AggregateThreadsOnVision> {
    return getPrismaFromContext(ctx).threadsOnVision.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ThreadsOnVisionGroupBy], {
    nullable: false
  })
  async groupByThreadsOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByThreadsOnVisionArgs): Promise<ThreadsOnVisionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnVision.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
