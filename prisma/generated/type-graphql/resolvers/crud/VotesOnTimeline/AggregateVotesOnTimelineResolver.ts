import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnTimelineArgs } from "./args/AggregateVotesOnTimelineArgs";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
import { AggregateVotesOnTimeline } from "../../outputs/AggregateVotesOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnTimeline)
export class AggregateVotesOnTimelineResolver {
  @TypeGraphQL.Query(_returns => AggregateVotesOnTimeline, {
    nullable: false
  })
  async aggregateVotesOnTimeline(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVotesOnTimelineArgs): Promise<AggregateVotesOnTimeline> {
    return getPrismaFromContext(ctx).votesOnTimeline.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
