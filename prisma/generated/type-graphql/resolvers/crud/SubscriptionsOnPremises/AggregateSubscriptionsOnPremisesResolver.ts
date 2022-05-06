import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSubscriptionsOnPremisesArgs } from "./args/AggregateSubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
import { AggregateSubscriptionsOnPremises } from "../../outputs/AggregateSubscriptionsOnPremises";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscriptionsOnPremises)
export class AggregateSubscriptionsOnPremisesResolver {
  @TypeGraphQL.Query(_returns => AggregateSubscriptionsOnPremises, {
    nullable: false
  })
  async aggregateSubscriptionsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSubscriptionsOnPremisesArgs): Promise<AggregateSubscriptionsOnPremises> {
    return getPrismaFromContext(ctx).subscriptionsOnPremises.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
