import * as TypeGraphQL from "type-graphql";
import { Thread } from "../../../models/Thread";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { Timeline } from "../../../models/Timeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnTimeline)
export class ThreadsOnTimelineRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Thread, {
    nullable: false
  })
  async thread(@TypeGraphQL.Root() threadsOnTimeline: ThreadsOnTimeline, @TypeGraphQL.Ctx() ctx: any): Promise<Thread> {
    return getPrismaFromContext(ctx).threadsOnTimeline.findUnique({
      where: {
        threadId: threadsOnTimeline.threadId,
      },
    }).thread({});
  }

  @TypeGraphQL.FieldResolver(_type => Timeline, {
    nullable: false
  })
  async timeline(@TypeGraphQL.Root() threadsOnTimeline: ThreadsOnTimeline, @TypeGraphQL.Ctx() ctx: any): Promise<Timeline> {
    return getPrismaFromContext(ctx).threadsOnTimeline.findUnique({
      where: {
        threadId: threadsOnTimeline.threadId,
      },
    }).timeline({});
  }
}
