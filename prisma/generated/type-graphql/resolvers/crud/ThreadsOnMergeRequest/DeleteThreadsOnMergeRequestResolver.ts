import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteThreadsOnMergeRequestArgs } from "./args/DeleteThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest)
export class DeleteThreadsOnMergeRequestResolver {
  @TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest, {
    nullable: true
  })
  async deleteThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
