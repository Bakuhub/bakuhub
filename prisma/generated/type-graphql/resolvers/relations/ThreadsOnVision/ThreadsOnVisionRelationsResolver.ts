import * as TypeGraphQL from "type-graphql";
import { Thread } from "../../../models/Thread";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
import { Vision } from "../../../models/Vision";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnVision)
export class ThreadsOnVisionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Thread, {
    nullable: false
  })
  async thread(@TypeGraphQL.Root() threadsOnVision: ThreadsOnVision, @TypeGraphQL.Ctx() ctx: any): Promise<Thread> {
    return getPrismaFromContext(ctx).threadsOnVision.findUnique({
      where: {
        threadId: threadsOnVision.threadId,
      },
    }).thread({});
  }

  @TypeGraphQL.FieldResolver(_type => Vision, {
    nullable: false
  })
  async vision(@TypeGraphQL.Root() threadsOnVision: ThreadsOnVision, @TypeGraphQL.Ctx() ctx: any): Promise<Vision> {
    return getPrismaFromContext(ctx).threadsOnVision.findUnique({
      where: {
        threadId: threadsOnVision.threadId,
      },
    }).vision({});
  }
}
