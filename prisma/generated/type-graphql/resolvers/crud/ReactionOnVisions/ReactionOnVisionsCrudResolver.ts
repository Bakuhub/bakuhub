import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnVisionsArgs } from "./args/AggregateReactionOnVisionsArgs";
import { CreateManyReactionOnVisionsArgs } from "./args/CreateManyReactionOnVisionsArgs";
import { CreateReactionOnVisionsArgs } from "./args/CreateReactionOnVisionsArgs";
import { DeleteManyReactionOnVisionsArgs } from "./args/DeleteManyReactionOnVisionsArgs";
import { DeleteReactionOnVisionsArgs } from "./args/DeleteReactionOnVisionsArgs";
import { FindFirstReactionOnVisionsArgs } from "./args/FindFirstReactionOnVisionsArgs";
import { FindManyReactionOnVisionsArgs } from "./args/FindManyReactionOnVisionsArgs";
import { FindUniqueReactionOnVisionsArgs } from "./args/FindUniqueReactionOnVisionsArgs";
import { GroupByReactionOnVisionsArgs } from "./args/GroupByReactionOnVisionsArgs";
import { UpdateManyReactionOnVisionsArgs } from "./args/UpdateManyReactionOnVisionsArgs";
import { UpdateReactionOnVisionsArgs } from "./args/UpdateReactionOnVisionsArgs";
import { UpsertReactionOnVisionsArgs } from "./args/UpsertReactionOnVisionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ReactionOnVisions } from "../../../models/ReactionOnVisions";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReactionOnVisions } from "../../outputs/AggregateReactionOnVisions";
import { ReactionOnVisionsGroupBy } from "../../outputs/ReactionOnVisionsGroupBy";

@TypeGraphQL.Resolver(_of => ReactionOnVisions)
export class ReactionOnVisionsCrudResolver {
  @TypeGraphQL.Query(_returns => ReactionOnVisions, {
    nullable: true
  })
  async findUniqueReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueReactionOnVisionsArgs): Promise<ReactionOnVisions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ReactionOnVisions, {
    nullable: true
  })
  async findFirstReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstReactionOnVisionsArgs): Promise<ReactionOnVisions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ReactionOnVisions], {
    nullable: false
  })
  async findManyReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyReactionOnVisionsArgs): Promise<ReactionOnVisions[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnVisions, {
    nullable: false
  })
  async createReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateReactionOnVisionsArgs): Promise<ReactionOnVisions> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyReactionOnVisionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnVisions, {
    nullable: true
  })
  async deleteReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteReactionOnVisionsArgs): Promise<ReactionOnVisions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnVisions, {
    nullable: true
  })
  async updateReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateReactionOnVisionsArgs): Promise<ReactionOnVisions | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyReactionOnVisionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyReactionOnVisionsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ReactionOnVisions, {
    nullable: false
  })
  async upsertReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertReactionOnVisionsArgs): Promise<ReactionOnVisions> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateReactionOnVisions, {
    nullable: false
  })
  async aggregateReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReactionOnVisionsArgs): Promise<AggregateReactionOnVisions> {
    return getPrismaFromContext(ctx).reactionOnVisions.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ReactionOnVisionsGroupBy], {
    nullable: false
  })
  async groupByReactionOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByReactionOnVisionsArgs): Promise<ReactionOnVisionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).reactionOnVisions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
