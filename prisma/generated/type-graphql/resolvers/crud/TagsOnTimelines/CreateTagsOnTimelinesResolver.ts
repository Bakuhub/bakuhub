import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateTagsOnTimelinesArgs } from "./args/CreateTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnTimelines)
export class CreateTagsOnTimelinesResolver {
  @TypeGraphQL.Mutation(_returns => TagsOnTimelines, {
    nullable: false
  })
  async createTagsOnTimelines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateTagsOnTimelinesArgs): Promise<TagsOnTimelines> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).tagsOnTimelines.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
