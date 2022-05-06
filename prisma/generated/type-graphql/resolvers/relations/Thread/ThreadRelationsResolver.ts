import * as TypeGraphQL from "type-graphql";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { Thread } from "../../../models/Thread";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { ThreadsOnPremise } from "../../../models/ThreadsOnPremise";
import { ThreadsOnTimeline } from "../../../models/ThreadsOnTimeline";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { User } from "../../../models/User";
import { VotesOnThread } from "../../../models/VotesOnThread";
import { ThreadChildThreadsArgs } from "./args/ThreadChildThreadsArgs";
import { ThreadReactionOnThreadsArgs } from "./args/ThreadReactionOnThreadsArgs";
import { ThreadVotesOnThreadArgs } from "./args/ThreadVotesOnThreadArgs";
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

  @TypeGraphQL.FieldResolver(_type => ThreadsOnMergeRequest, {
    nullable: true
  })
  async threadsOnMergeRequest(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any): Promise<ThreadsOnMergeRequest | null> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).threadsOnMergeRequest({});
  }

  @TypeGraphQL.FieldResolver(_type => [ReactionOnThreads], {
    nullable: false
  })
  async reactionOnThreads(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ThreadReactionOnThreadsArgs): Promise<ReactionOnThreads[]> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).reactionOnThreads(args);
  }

  @TypeGraphQL.FieldResolver(_type => [VotesOnThread], {
    nullable: false
  })
  async votesOnThread(@TypeGraphQL.Root() thread: Thread, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ThreadVotesOnThreadArgs): Promise<VotesOnThread[]> {
    return getPrismaFromContext(ctx).thread.findUnique({
      where: {
        id: thread.id,
      },
    }).votesOnThread(args);
  }
}
