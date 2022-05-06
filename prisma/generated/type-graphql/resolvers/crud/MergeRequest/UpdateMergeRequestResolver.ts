import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateMergeRequestArgs } from "./args/UpdateMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MergeRequest)
export class UpdateMergeRequestResolver {
  @TypeGraphQL.Mutation(_returns => MergeRequest, {
    nullable: true
  })
  async updateMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateMergeRequestArgs): Promise<MergeRequest | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mergeRequest.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
