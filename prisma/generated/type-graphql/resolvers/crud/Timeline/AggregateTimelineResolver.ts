import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTimelineArgs } from "./args/AggregateTimelineArgs";
import { Timeline } from "../../../models/Timeline";
import { AggregateTimeline } from "../../outputs/AggregateTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timeline)
export class AggregateTimelineResolver {
  @TypeGraphQL.Query(_returns => AggregateTimeline, {
    nullable: false
  })
  async aggregateTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTimelineArgs): Promise<AggregateTimeline> {
    return getPrismaFromContext(ctx).timeline.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
