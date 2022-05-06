import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnTimelineArgs } from "./args/AggregateThreadsOnTimelineArgs";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { AggregateThreadsOnTimeline } from "../../outputs/AggregateThreadsOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnTimeline)
export class AggregateThreadsOnTimelineResolver {
  @TypeGraphQL.Query(_returns => AggregateThreadsOnTimeline, {
    nullable: false
  })
  async aggregateThreadsOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThreadsOnTimelineArgs): Promise<AggregateThreadsOnTimeline> {
    return getPrismaFromContext(ctx).threadsOnTimeline.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
