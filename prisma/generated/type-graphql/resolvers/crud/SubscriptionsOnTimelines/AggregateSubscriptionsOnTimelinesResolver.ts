import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSubscriptionsOnTimelinesArgs } from "./args/AggregateSubscriptionsOnTimelinesArgs";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
import { AggregateSubscriptionsOnTimelines } from "../../outputs/AggregateSubscriptionsOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines)
export class AggregateSubscriptionsOnTimelinesResolver {
  @TypeGraphQL.Query(_returns => AggregateSubscriptionsOnTimelines, {
    nullable: false
  })
  async aggregateSubscriptionsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSubscriptionsOnTimelinesArgs): Promise<AggregateSubscriptionsOnTimelines> {
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
