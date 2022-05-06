import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSubscriptionsOnTimelinesArgs } from "./args/AggregateSubscriptionsOnTimelinesArgs";
import { CreateManySubscriptionsOnTimelinesArgs } from "./args/CreateManySubscriptionsOnTimelinesArgs";
import { CreateSubscriptionsOnTimelinesArgs } from "./args/CreateSubscriptionsOnTimelinesArgs";
import { DeleteManySubscriptionsOnTimelinesArgs } from "./args/DeleteManySubscriptionsOnTimelinesArgs";
import { DeleteSubscriptionsOnTimelinesArgs } from "./args/DeleteSubscriptionsOnTimelinesArgs";
import { FindFirstSubscriptionsOnTimelinesArgs } from "./args/FindFirstSubscriptionsOnTimelinesArgs";
import { FindManySubscriptionsOnTimelinesArgs } from "./args/FindManySubscriptionsOnTimelinesArgs";
import { FindUniqueSubscriptionsOnTimelinesArgs } from "./args/FindUniqueSubscriptionsOnTimelinesArgs";
import { GroupBySubscriptionsOnTimelinesArgs } from "./args/GroupBySubscriptionsOnTimelinesArgs";
import { UpdateManySubscriptionsOnTimelinesArgs } from "./args/UpdateManySubscriptionsOnTimelinesArgs";
import { UpdateSubscriptionsOnTimelinesArgs } from "./args/UpdateSubscriptionsOnTimelinesArgs";
import { UpsertSubscriptionsOnTimelinesArgs } from "./args/UpsertSubscriptionsOnTimelinesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSubscriptionsOnTimelines } from "../../outputs/AggregateSubscriptionsOnTimelines";
import { SubscriptionsOnTimelinesGroupBy } from "../../outputs/SubscriptionsOnTimelinesGroupBy";

@TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines)
export class SubscriptionsOnTimelinesCrudResolver {
  @TypeGraphQL.Query(_returns => SubscriptionsOnTimelines, {
    nullable: true
  })
  async findUniqueSubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SubscriptionsOnTimelines, {
    nullable: true
  })
  async findFirstSubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SubscriptionsOnTimelines], {
    nullable: false
  })
  async findManySubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines, {
    nullable: false
  })
  async createSubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySubscriptionsOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines, {
    nullable: true
  })
  async deleteSubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines, {
    nullable: true
  })
  async updateSubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySubscriptionsOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySubscriptionsOnTimelinesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SubscriptionsOnTimelines, {
    nullable: false
  })
  async upsertSubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertSubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateSubscriptionsOnTimelines, {
    nullable: false
  })
  async aggregateSubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSubscriptionsOnTimelinesArgs): Promise<AggregateSubscriptionsOnTimelines> {
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [SubscriptionsOnTimelinesGroupBy], {
    nullable: false
  })
  async groupBySubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySubscriptionsOnTimelinesArgs): Promise<SubscriptionsOnTimelinesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
