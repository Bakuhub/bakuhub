import * as TypeGraphQL from "type-graphql";
import { ReactionOnThreads } from "../../../models/ReactionOnThreads";
import { Thread } from "../../../models/Thread";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ReactionOnThreads)
export class ReactionOnThreadsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() reactionOnThreads: ReactionOnThreads, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).reactionOnThreads.findUnique({
      where: {
        userId_threadId: {
          userId: reactionOnThreads.userId,
          threadId: reactionOnThreads.threadId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Thread, {
    nullable: false
  })
  async thread(@TypeGraphQL.Root() reactionOnThreads: ReactionOnThreads, @TypeGraphQL.Ctx() ctx: any): Promise<Thread> {
    return getPrismaFromContext(ctx).reactionOnThreads.findUnique({
      where: {
        userId_threadId: {
          userId: reactionOnThreads.userId,
          threadId: reactionOnThreads.threadId,
        },
      },
    }).thread({});
  }
}
