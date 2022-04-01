import * as TypeGraphQL from "type-graphql";
import { ReactionOnThread } from "../../../models/ReactionOnThread";
import { Thread } from "../../../models/Thread";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { User } from "../../../models/User";
import { ThreadChildThreadsArgs } from "./args/ThreadChildThreadsArgs";
import { ThreadReactionOnThreadArgs } from "./args/ThreadReactionOnThreadArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Thread)
export class ThreadRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async author(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Thread, {
    nullable: true
  })
  async parentThread(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any): Promise<Thread | null> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).parentThread({});
  }

  @TypeGraphQL.FieldResolver(_type => [Thread], {
    nullable: false
  })
  async childThreads(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ThreadChildThreadsArgs): Promise<Thread[]> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).childThreads(args);
  }

  @TypeGraphQL.FieldResolver(_type => ThreadsOnPremise, {
    nullable: true
  })
  async threadsOnPremise(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any): Promise<ThreadsOnPremise | null> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).threadsOnPremise({});
  }

  @TypeGraphQL.FieldResolver(_type => ThreadsOnTimeline, {
    nullable: true
  })
  async threadsOnTimeline(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any): Promise<ThreadsOnTimeline | null> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).threadsOnTimeline({});
  }

  @TypeGraphQL.FieldResolver(_type => ThreadsOnVision, {
    nullable: true
  })
  async threadsOnVision(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any): Promise<ThreadsOnVision | null> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).threadsOnVision({});
  }

  @TypeGraphQL.FieldResolver(_type => [ReactionOnThread], {
    nullable: false
  })
  async ReactionOnThread(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ThreadReactionOnThreadArgs): Promise<ReactionOnThread[]> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).ReactionOnThread(args);
  }
}
