import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByMergeRequestArgs } from "./args/GroupByMergeRequestArgs";
import { MergeRequest } from "../../../models/MergeRequest";
import { MergeRequestGroupBy } from "../../outputs/MergeRequestGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MergeRequest)
export class GroupByMergeRequestResolver {
  @TypeGraphQL.Query(_returns => [MergeRequestGroupBy], {
    nullable: false
  })
  async groupByMergeRequest(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMergeRequestArgs): Promise<MergeRequestGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).mergeRequest.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
