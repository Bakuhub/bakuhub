import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertThreadsOnMergeRequestArgs } from "./args/UpsertThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest)
export class UpsertThreadsOnMergeRequestResolver {
  @TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest, {
    nullable: false
  })
  async upsertThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
