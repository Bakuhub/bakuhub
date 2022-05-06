import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByTagsOnPremisesArgs } from "./args/GroupByTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { TagsOnPremisesGroupBy } from "../../outputs/TagsOnPremisesGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnPremises)
export class GroupByTagsOnPremisesResolver {
  @TypeGraphQL.Query(_returns => [TagsOnPremisesGroupBy], {
    nullable: false
  })
  async groupByTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTagsOnPremisesArgs): Promise<TagsOnPremisesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
