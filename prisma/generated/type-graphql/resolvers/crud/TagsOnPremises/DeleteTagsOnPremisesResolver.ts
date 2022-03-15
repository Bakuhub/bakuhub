import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteTagsOnPremisesArgs } from "./args/DeleteTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnPremises)
export class DeleteTagsOnPremisesResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnPremises, {
    nullable: true
  })
  async deleteTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTagsOnPremisesArgs): Promise<TagsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
