import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyTagsOnPremisesArgs } from "./args/FindManyTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnPremises)
export class FindManyTagsOnPremisesResolver {
  @TypeGraphQL.Query(_returns => [TagsOnPremises], {
    nullable: false
  })
  async findManyTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTagsOnPremisesArgs): Promise<TagsOnPremises[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
