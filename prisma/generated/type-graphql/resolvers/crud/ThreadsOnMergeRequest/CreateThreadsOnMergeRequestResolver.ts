import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateThreadsOnMergeRequestArgs } from "./args/CreateThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest)
export class CreateThreadsOnMergeRequestResolver {
  @TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest, {
    nullable: false
  })
  async createThreadsOnMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).threadsOnMergeRequest.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
