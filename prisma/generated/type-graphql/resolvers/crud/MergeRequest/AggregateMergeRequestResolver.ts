import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMergeRequestArgs } from "./args/AggregateMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
import { AggregateMergeRequest } from "../../outputs/AggregateMergeRequest";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MergeRequest)
export class AggregateMergeRequestResolver {
  @TypeGraphQL.Query(_returns => AggregateMergeRequest, {
    nullable: false
  })
  async aggregateMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMergeRequestArgs): Promise<AggregateMergeRequest> {
    return getPrismaFromContext(ctx).mergeRequest.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
