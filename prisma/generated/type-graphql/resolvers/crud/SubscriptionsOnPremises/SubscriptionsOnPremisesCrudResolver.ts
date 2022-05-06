import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSubscriptionsOnPremisesArgs } from "./args/AggregateSubscriptionsOnPremisesArgs";
import { CreateManySubscriptionsOnPremisesArgs } from "./args/CreateManySubscriptionsOnPremisesArgs";
import { CreateSubscriptionsOnPremisesArgs } from "./args/CreateSubscriptionsOnPremisesArgs";
import { DeleteManySubscriptionsOnPremisesArgs } from "./args/DeleteManySubscriptionsOnPremisesArgs";
import { DeleteSubscriptionsOnPremisesArgs } from "./args/DeleteSubscriptionsOnPremisesArgs";
import { FindFirstSubscriptionsOnPremisesArgs } from "./args/FindFirstSubscriptionsOnPremisesArgs";
import { FindManySubscriptionsOnPremisesArgs } from "./args/FindManySubscriptionsOnPremisesArgs";
import { FindUniqueSubscriptionsOnPremisesArgs } from "./args/FindUniqueSubscriptionsOnPremisesArgs";
import { GroupBySubscriptionsOnPremisesArgs } from "./args/GroupBySubscriptionsOnPremisesArgs";
import { UpdateManySubscriptionsOnPremisesArgs } from "./args/UpdateManySubscriptionsOnPremisesArgs";
import { UpdateSubscriptionsOnPremisesArgs } from "./args/UpdateSubscriptionsOnPremisesArgs";
import { UpsertSubscriptionsOnPremisesArgs } from "./args/UpsertSubscriptionsOnPremisesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSubscriptionsOnPremises } from "../../outputs/AggregateSubscriptionsOnPremises";
import { SubscriptionsOnPremisesGroupBy } from "../../outputs/SubscriptionsOnPremisesGroupBy";

@TypeGraphQL.Resolver(_of => SubscriptionsOnPremises)
export class SubscriptionsOnPremisesCrudResolver {
  @TypeGraphQL.Query(_returns => SubscriptionsOnPremises, {
    nullable: true
  })
  async findUniqueSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SubscriptionsOnPremises, {
    nullable: true
  })
  async findFirstSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SubscriptionsOnPremises], {
    nullable: false
  })
  async findManySubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises, {
    nullable: false
  })
  async createSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySubscriptionsOnPremisesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises, {
    nullable: true
  })
  async deleteSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises, {
    nullable: true
  })
  async updateSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySubscriptionsOnPremisesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySubscriptionsOnPremisesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises, {
    nullable: false
  })
  async upsertSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremises> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateSubscriptionsOnPremises, {
    nullable: false
  })
  async aggregateSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSubscriptionsOnPremisesArgs): Promise<AggregateSubscriptionsOnPremises> {
    return getPrismaFromContext(ctx).subscriptionsOnPremises.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [SubscriptionsOnPremisesGroupBy], {
    nullable: false
  })
  async groupBySubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySubscriptionsOnPremisesArgs): Promise<SubscriptionsOnPremisesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnPremises.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
