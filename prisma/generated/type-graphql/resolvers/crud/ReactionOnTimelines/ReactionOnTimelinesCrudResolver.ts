import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnTimelinesArgs } from "./args/AggregateReactionOnTimelinesArgs";
import { CreateManyReactionOnTimelinesArgs } from "./args/CreateManyReactionOnTimelinesArgs";
import { CreateReactionOnTimelinesArgs } from "./args/CreateReactionOnTimelinesArgs";
import { DeleteManyReactionOnTimelinesArgs } from "./args/DeleteManyReactionOnTimelinesArgs";
import { DeleteReactionOnTimelinesArgs } from "./args/DeleteReactionOnTimelinesArgs";
import { FindFirstReactionOnTimelinesArgs } from "./args/FindFirstReactionOnTimelinesArgs";
import { FindManyReactionOnTimelinesArgs } from "./args/FindManyReactionOnTimelinesArgs";
import { FindUniqueReactionOnTimelinesArgs } from "./args/FindUniqueReactionOnTimelinesArgs";
import { GroupByReactionOnTimelinesArgs } from "./args/GroupByReactionOnTimelinesArgs";
import { UpdateManyReactionOnTimelinesArgs } from "./args/UpdateManyReactionOnTimelinesArgs";
import { UpdateReactionOnTimelinesArgs } from "./args/UpdateReactionOnTimelinesArgs";
import { UpsertReactionOnTimelinesArgs } from "./args/UpsertReactionOnTimelinesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReactionOnTimelines } from "../../outputs/AggregateReactionOnTimelines";
import { ReactionOnTimelinesGroupBy } from "../../outputs/ReactionOnTimelinesGroupBy";

@TypeGraphQL.Resolver(_of => ReactionOnTimelines)
export class ReactionOnTimelinesCrudResolver {
  @TypeGraphQL.Query(_returns => ReactionOnTimelines, {
    nullable: true
  })
  async findUniqueReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ReactionOnTimelines, {
    nullable: true
  })
  async findFirstReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ReactionOnTimelines], {
    nullable: false
  })
  async findManyReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyReactionOnTimelinesArgs): Promise<ReactionOnTimelines[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnTimelines, {
    nullable: false
  })
  async createReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateReactionOnTimelinesArgs): Promise<ReactionOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyReactionOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnTimelines, {
    nullable: true
  })
  async deleteReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnTimelines, {
    nullable: true
  })
  async updateReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateReactionOnTimelinesArgs): Promise<ReactionOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyReactionOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyReactionOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnTimelines, {
    nullable: false
  })
  async upsertReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertReactionOnTimelinesArgs): Promise<ReactionOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateReactionOnTimelines, {
    nullable: false
  })
  async aggregateReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReactionOnTimelinesArgs): Promise<AggregateReactionOnTimelines> {
    return getPrismaFromContext(ctx).reactionOnTimelines.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ReactionOnTimelinesGroupBy], {
    nullable: false
  })
  async groupByReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByReactionOnTimelinesArgs): Promise<ReactionOnTimelinesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnTimelines.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
