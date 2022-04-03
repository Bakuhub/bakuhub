import * as TypeGraphQL from "type-graphql";
import { MergeRequest } from "../../../models/MergeRequest";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { Vision } from "../../../models/Vision";
import { MergeRequestThreadsOnMergeRequestArgs } from "./args/MergeRequestThreadsOnMergeRequestArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MergeRequest)
export class MergeRequestRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Vision, {
    nullable: false
  })
  async vision(@TypeGraphQL.Root() mergeRequest: MergeRequest, @TypeGraphQL.Ctx() ctx: any): Promise<Vision> {
    return getPrismaFromContext(ctx).mergeRequest.findUnique({
      where: {
        id: mergeRequest.id,
      },
    }).vision({});
  }

  @TypeGraphQL.FieldResolver(_type => [ThreadsOnMergeRequest], {
    nullable: false
  })
  async threadsOnMergeRequest(@TypeGraphQL.Root() mergeRequest: MergeRequest, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MergeRequestThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest[]> {
    return getPrismaFromContext(ctx).mergeRequest.findUnique({
      where: {
        id: mergeRequest.id,
      },
    }).threadsOnMergeRequest(args);
  }
}
