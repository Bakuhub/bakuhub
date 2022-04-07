import * as TypeGraphQL from "type-graphql";
import { ReactionOnTimelines } from "../../../models/ReactionOnTimelines";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnTimelines)
export class ReactionOnTimelinesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() reactionOnTimelines: ReactionOnTimelines, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).reactionOnTimelines.findUnique({
      where: {
        userId_timelineId: {
          userId: reactionOnTimelines.userId,
          timelineId: reactionOnTimelines.timelineId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Timeline, {
    nullable: false
  })
  async timeline(@TypeGraphQL.Root() reactionOnTimelines: ReactionOnTimelines, @TypeGraphQL.Ctx() ctx: any): Promise<Timeline> {
    return getPrismaFromContext(ctx).reactionOnTimelines.findUnique({
      where: {
        userId_timelineId: {
          userId: reactionOnTimelines.userId,
          timelineId: reactionOnTimelines.timelineId,
        },
      },
    }).timeline({});
  }
}
