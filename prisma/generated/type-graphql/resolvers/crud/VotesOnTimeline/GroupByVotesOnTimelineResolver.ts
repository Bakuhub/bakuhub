import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByVotesOnTimelineArgs } from "./args/GroupByVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
import { VotesOnTimelineGroupBy } from "../../outputs/VotesOnTimelineGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnTimeline)
export class GroupByVotesOnTimelineResolver {
  @TypeGraphQL.Query(_returns => [VotesOnTimelineGroupBy], {
    nullable: false
  })
  async groupByVotesOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVotesOnTimelineArgs): Promise<VotesOnTimelineGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).votesOnTimeline.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
