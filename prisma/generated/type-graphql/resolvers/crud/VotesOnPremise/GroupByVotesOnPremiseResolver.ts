import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByVotesOnPremiseArgs } from "./args/GroupByVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
import { VotesOnPremiseGroupBy } from "../../outputs/VotesOnPremiseGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnPremise)
export class GroupByVotesOnPremiseResolver {
  @TypeGraphQL.Query(_returns => [VotesOnPremiseGroupBy], {
    nullable: false
  })
  async groupByVotesOnPremise(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVotesOnPremiseArgs): Promise<VotesOnPremiseGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnPremise.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
