import * as TypeGraphQL from "type-graphql";
import { MergeRequest } from "../../../models/MergeRequest";
import { Thread } from "../../../models/Thread";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest)
export class ThreadsOnMergeRequestRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Thread, {
    nullable: false
  })
  async thread(@TypeGraphQL.Root() threadsOnMergeRequest: ThreadsOnMergeRequest, @TypeGraphQL.Ctx() ctx: any): Promise<Thread> {
    return getPrismaFromContext(ctx).threadsOnMergeRequest.findUnique({
      where: {
        threadId: threadsOnMergeRequest.threadId,
      },
    }).thread({});
  }

  @TypeGraphQL.FieldResolver(_type => MergeRequest, {
    nullable: false
  })
  async mergeRequest(@TypeGraphQL.Root() threadsOnMergeRequest: ThreadsOnMergeRequest, @TypeGraphQL.Ctx() ctx: any): Promise<MergeRequest> {
    return getPrismaFromContext(ctx).threadsOnMergeRequest.findUnique({
      where: {
        threadId: threadsOnMergeRequest.threadId,
      },
    }).mergeRequest({});
  }
}
