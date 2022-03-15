import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertTagsOnTimelinesArgs } from "./args/UpsertTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnTimelines)
export class UpsertTagsOnTimelinesResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnTimelines, {
    nullable: false
  })
  async upsertTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertTagsOnTimelinesArgs): Promise<TagsOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
