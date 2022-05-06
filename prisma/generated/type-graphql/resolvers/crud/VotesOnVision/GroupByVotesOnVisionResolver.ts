import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByVotesOnVisionArgs } from "./args/GroupByVotesOnVisionArgs";
import { VotesOnVision } from "../../../models/VotesOnVision";
import { VotesOnVisionGroupBy } from "../../outputs/VotesOnVisionGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnVision)
export class GroupByVotesOnVisionResolver {
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
