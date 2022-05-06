import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySubscriptionsOnPremisesArgs } from "./args/GroupBySubscriptionsOnPremisesArgs";
import { SubscriptionsOnPremises } from "../../../models/SubscriptionsOnPremises";
import { SubscriptionsOnPremisesGroupBy } from "../../outputs/SubscriptionsOnPremisesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscriptionsOnPremises)
export class GroupBySubscriptionsOnPremisesResolver {
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
