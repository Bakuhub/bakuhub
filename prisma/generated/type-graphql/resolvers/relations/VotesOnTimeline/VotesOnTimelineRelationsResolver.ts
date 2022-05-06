import * as TypeGraphQL from "type-graphql";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { VotesOnTimeline } from "../../../models/VotesOnTimeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnTimeline)
export class VotesOnTimelineRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() votesOnTimeline: VotesOnTimeline, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).votesOnTimeline.findUnique({
      where: {
        userId_timelineId: {
          userId: votesOnTimeline.userId,
          timelineId: votesOnTimeline.timelineId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Timeline, {
    nullable: false
  })
  async timeline(@TypeGraphQL.Root() votesOnTimeline: VotesOnTimeline, @TypeGraphQL.Ctx() ctx: any): Promise<Timeline> {
    return getPrismaFromContext(ctx).votesOnTimeline.findUnique({
      where: {
        userId_timelineId: {
          userId: votesOnTimeline.userId,
          timelineId: votesOnTimeline.timelineId,
        },
      },
    }).timeline({});
  }
}
