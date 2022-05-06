import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByVotesOnThreadArgs } from "./args/GroupByVotesOnThreadArgs";
import { VotesOnThread } from "../../../models/VotesOnThread";
import { VotesOnThreadGroupBy } from "../../outputs/VotesOnThreadGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnThread)
export class GroupByVotesOnThreadResolver {
  @TypeGraphQL.Query(_returns => [VotesOnThreadGroupBy], {
    nullable: false
  })
  async groupByVotesOnThread(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVotesOnThreadArgs): Promise<VotesOnThreadGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnThread.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
