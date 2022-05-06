import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnVisionArgs } from "./args/AggregateVotesOnVisionArgs";
import { CreateManyVotesOnVisionArgs } from "./args/CreateManyVotesOnVisionArgs";
import { CreateVotesOnVisionArgs } from "./args/CreateVotesOnVisionArgs";
import { DeleteManyVotesOnVisionArgs } from "./args/DeleteManyVotesOnVisionArgs";
import { DeleteVotesOnVisionArgs } from "./args/DeleteVotesOnVisionArgs";
import { FindFirstVotesOnVisionArgs } from "./args/FindFirstVotesOnVisionArgs";
import { FindManyVotesOnVisionArgs } from "./args/FindManyVotesOnVisionArgs";
import { FindUniqueVotesOnVisionArgs } from "./args/FindUniqueVotesOnVisionArgs";
import { GroupByVotesOnVisionArgs } from "./args/GroupByVotesOnVisionArgs";
import { UpdateManyVotesOnVisionArgs } from "./args/UpdateManyVotesOnVisionArgs";
import { UpdateVotesOnVisionArgs } from "./args/UpdateVotesOnVisionArgs";
import { UpsertVotesOnVisionArgs } from "./args/UpsertVotesOnVisionArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VotesOnVision } from "../../../models/VotesOnVision";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVotesOnVision } from "../../outputs/AggregateVotesOnVision";
import { VotesOnVisionGroupBy } from "../../outputs/VotesOnVisionGroupBy";

@TypeGraphQL.Resolver(_of => VotesOnVision)
export class VotesOnVisionCrudResolver {
  @TypeGraphQL.Query(_returns => VotesOnVision, {
    nullable: true
  })
  async votesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVotesOnVisionArgs): Promise<VotesOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VotesOnVision, {
    nullable: true
  })
  async findFirstVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVotesOnVisionArgs): Promise<VotesOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VotesOnVision], {
    nullable: false
  })
  async votesOnVisions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVotesOnVisionArgs): Promise<VotesOnVision[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VotesOnVision, {
    nullable: false
  })
  async createVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateVotesOnVisionArgs): Promise<VotesOnVision> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyVotesOnVisionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VotesOnVision, {
    nullable: true
  })
  async deleteVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteVotesOnVisionArgs): Promise<VotesOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VotesOnVision, {
    nullable: true
  })
  async updateVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateVotesOnVisionArgs): Promise<VotesOnVision | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyVotesOnVisionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyVotesOnVisionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VotesOnVision, {
    nullable: false
  })
  async upsertVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertVotesOnVisionArgs): Promise<VotesOnVision> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateVotesOnVision, {
    nullable: false
  })
  async aggregateVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVotesOnVisionArgs): Promise<AggregateVotesOnVision> {
    return getPrismaFromContext(ctx).votesOnVision.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [VotesOnVisionGroupBy], {
    nullable: false
  })
  async groupByVotesOnVision(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVotesOnVisionArgs): Promise<VotesOnVisionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnVision.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
