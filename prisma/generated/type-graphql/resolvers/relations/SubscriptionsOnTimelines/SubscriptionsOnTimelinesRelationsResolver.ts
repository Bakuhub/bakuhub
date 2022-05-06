import * as TypeGraphQL from "type-graphql";
import { SubscriptionsOnTimelines } from "../../../models/SubscriptionsOnTimelines";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SubscriptionsOnTimelines)
export class SubscriptionsOnTimelinesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() subscriptionsOnTimelines: SubscriptionsOnTimelines, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.findUnique({
      where: {
        userId_timelineId: {
          userId: subscriptionsOnTimelines.userId,
          timelineId: subscriptionsOnTimelines.timelineId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Timeline, {
    nullable: false
  })
  async timeline(@TypeGraphQL.Root() subscriptionsOnTimelines: SubscriptionsOnTimelines, @TypeGraphQL.Ctx() ctx: any): Promise<Timeline> {
    return getPrismaFromContext(ctx).subscriptionsOnTimelines.findUnique({
      where: {
        userId_timelineId: {
          userId: subscriptionsOnTimelines.userId,
          timelineId: subscriptionsOnTimelines.timelineId,
        },
      },
    }).timeline({});
  }
}
