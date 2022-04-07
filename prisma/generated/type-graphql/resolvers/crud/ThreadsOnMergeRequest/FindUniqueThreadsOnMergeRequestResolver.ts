import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThreadsOnMergeRequestArgs } from "./args/FindUniqueThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest)
export class FindUniqueThreadsOnMergeRequestResolver {
  @TypeGraphQL.Query(_returns => ThreadsOnMergeRequest, {
    nullable: true
  })
  async threadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
