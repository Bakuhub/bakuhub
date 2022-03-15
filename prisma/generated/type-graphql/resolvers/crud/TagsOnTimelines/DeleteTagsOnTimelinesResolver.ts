import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteTagsOnTimelinesArgs } from "./args/DeleteTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnTimelines)
export class DeleteTagsOnTimelinesResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnTimelines, {
    nullable: true
  })
  async deleteTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteTagsOnTimelinesArgs): Promise<TagsOnTimelines | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
