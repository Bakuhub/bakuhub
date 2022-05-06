import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnTimelinesArgs } from "./args/AggregateReactionOnTimelinesArgs";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { AggregateReactionOnTimelines } from "../../outputs/AggregateReactionOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnTimelines)
export class AggregateReactionOnTimelinesResolver {
  @TypeGraphQL.Query(_returns => AggregateReactionOnTimelines, {
    nullable: false
  })
  async aggregateReactionOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReactionOnTimelinesArgs): Promise<AggregateReactionOnTimelines> {
    return getPrismaFromContext(ctx).reactionOnTimelines.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
