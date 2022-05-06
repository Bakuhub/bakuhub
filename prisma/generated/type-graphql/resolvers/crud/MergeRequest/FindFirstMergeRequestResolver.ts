import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstMergeRequestArgs } from "./args/FindFirstMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MergeRequest)
export class FindFirstMergeRequestResolver {
  @TypeGraphQL.Query(_returns => MergeRequest, {
    nullable: true
  })
  async findFirstMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMergeRequestArgs): Promise<MergeRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mergeRequest.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
