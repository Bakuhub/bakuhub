import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTimelineArgs } from "./args/GroupByTimelineArgs";
import { Timeline } from "../../../models/Timeline";
import { TimelineGroupBy } from "../../outputs/TimelineGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timeline)
export class GroupByTimelineResolver {
  @TypeGraphQL.Query(_returns => [TimelineGroupBy], {
    nullable: false
  })
  async groupByTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTimelineArgs): Promise<TimelineGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).timeline.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
