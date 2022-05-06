import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateTagsOnPremisesArgs } from "./args/UpdateTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnPremises)
export class UpdateTagsOnPremisesResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnPremises, {
    nullable: true
  })
  async updateTagsOnPremises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateTagsOnPremisesArgs): Promise<TagsOnPremises | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnPremises.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
