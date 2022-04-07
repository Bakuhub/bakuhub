import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
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
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReactionOnThreads } from "../../outputs/AggregateReactionOnThreads";
import { ReactionOnThreadsGroupBy } from "../../outputs/ReactionOnThreadsGroupBy";

@TypeGraphQL.Resolver(_of => ReactionOnThreads)
export class ReactionOnThreadsCrudResolver {
  @TypeGraphQL.Query(_returns => ReactionOnThreads, {
    nullable: true
  })
  async findUniqueReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueReactionOnThreadsArgs): Promise<ReactionOnThreads | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ReactionOnThreads, {
    nullable: true
  })
  async findFirstReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstReactionOnThreadsArgs): Promise<ReactionOnThreads | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ReactionOnThreads], {
    nullable: false
  })
  async findManyReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyReactionOnThreadsArgs): Promise<ReactionOnThreads[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnThreads, {
    nullable: false
  })
  async createReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateReactionOnThreadsArgs): Promise<ReactionOnThreads> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyReactionOnThreadsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnThreads, {
    nullable: true
  })
  async deleteReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteReactionOnThreadsArgs): Promise<ReactionOnThreads | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnThreads, {
    nullable: true
  })
  async updateReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateReactionOnThreadsArgs): Promise<ReactionOnThreads | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyReactionOnThreadsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyReactionOnThreadsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnThreads, {
    nullable: false
  })
  async upsertReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertReactionOnThreadsArgs): Promise<ReactionOnThreads> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateReactionOnThreads, {
    nullable: false
  })
  async aggregateReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReactionOnThreadsArgs): Promise<AggregateReactionOnThreads> {
    return getPrismaFromContext(ctx).reactionOnThreads.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ReactionOnThreadsGroupBy], {
    nullable: false
  })
  async groupByReactionOnThreads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByReactionOnThreadsArgs): Promise<ReactionOnThreadsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnThreads.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
