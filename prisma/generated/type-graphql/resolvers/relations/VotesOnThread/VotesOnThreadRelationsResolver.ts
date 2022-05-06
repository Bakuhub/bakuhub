import * as TypeGraphQL from "type-graphql";
import { Thread } from "../../../models/Thread";
import { User } from "../../../models/User";
import { VotesOnThread } from "../../../models/VotesOnThread";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VotesOnThread)
export class VotesOnThreadRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() votesOnThread: VotesOnThread, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).votesOnThread.findUnique({
      where: {
        userId_threadId: {
          userId: votesOnThread.userId,
          threadId: votesOnThread.threadId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Thread, {
    nullable: false
  })
  async thread(@TypeGraphQL.Root() votesOnThread: VotesOnThread, @TypeGraphQL.Ctx() ctx: any): Promise<Thread> {
    return getPrismaFromContext(ctx).votesOnThread.findUnique({
      where: {
        userId_threadId: {
          userId: votesOnThread.userId,
          threadId: votesOnThread.threadId,
        },
      },
    }).thread({});
  }
}
