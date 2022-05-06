import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePremisesOnTimelinesArgs } from "./args/AggregatePremisesOnTimelinesArgs";
import { CreateManyPremisesOnTimelinesArgs } from "./args/CreateManyPremisesOnTimelinesArgs";
import { CreatePremisesOnTimelinesArgs } from "./args/CreatePremisesOnTimelinesArgs";
import { DeleteManyPremisesOnTimelinesArgs } from "./args/DeleteManyPremisesOnTimelinesArgs";
import { DeletePremisesOnTimelinesArgs } from "./args/DeletePremisesOnTimelinesArgs";
import { FindFirstPremisesOnTimelinesArgs } from "./args/FindFirstPremisesOnTimelinesArgs";
import { FindManyPremisesOnTimelinesArgs } from "./args/FindManyPremisesOnTimelinesArgs";
import { FindUniquePremisesOnTimelinesArgs } from "./args/FindUniquePremisesOnTimelinesArgs";
import { GroupByPremisesOnTimelinesArgs } from "./args/GroupByPremisesOnTimelinesArgs";
import { UpdateManyPremisesOnTimelinesArgs } from "./args/UpdateManyPremisesOnTimelinesArgs";
import { UpdatePremisesOnTimelinesArgs } from "./args/UpdatePremisesOnTimelinesArgs";
import { UpsertPremisesOnTimelinesArgs } from "./args/UpsertPremisesOnTimelinesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePremisesOnTimelines } from "../../outputs/AggregatePremisesOnTimelines";
import { PremisesOnTimelinesGroupBy } from "../../outputs/PremisesOnTimelinesGroupBy";

@TypeGraphQL.Resolver(_of => PremisesOnTimelines)
export class PremisesOnTimelinesCrudResolver {
  @TypeGraphQL.Query(_returns => PremisesOnTimelines, {
    nullable: true
  })
  async findUniquePremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PremisesOnTimelines, {
    nullable: true
  })
  async findFirstPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PremisesOnTimelines], {
    nullable: false
  })
  async findManyPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPremisesOnTimelinesArgs): Promise<PremisesOnTimelines[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PremisesOnTimelines, {
    nullable: false
  })
  async createPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreatePremisesOnTimelinesArgs): Promise<PremisesOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPremisesOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PremisesOnTimelines, {
    nullable: true
  })
  async deletePremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PremisesOnTimelines, {
    nullable: true
  })
  async updatePremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdatePremisesOnTimelinesArgs): Promise<PremisesOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPremisesOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPremisesOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PremisesOnTimelines, {
    nullable: false
  })
  async upsertPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertPremisesOnTimelinesArgs): Promise<PremisesOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregatePremisesOnTimelines, {
    nullable: false
  })
  async aggregatePremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePremisesOnTimelinesArgs): Promise<AggregatePremisesOnTimelines> {
    return getPrismaFromContext(ctx).premisesOnTimelines.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [PremisesOnTimelinesGroupBy], {
    nullable: false
  })
  async groupByPremisesOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPremisesOnTimelinesArgs): Promise<PremisesOnTimelinesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).premisesOnTimelines.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
