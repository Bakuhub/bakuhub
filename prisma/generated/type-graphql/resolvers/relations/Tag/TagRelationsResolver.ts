import * as TypeGraphQL from "type-graphql";
import { Tag } from "../../../models/Tag";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { TagTagsOnPremisesArgs } from "./args/TagTagsOnPremisesArgs";
import { TagTagsOnTimelinesArgs } from "./args/TagTagsOnTimelinesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tag)
export class TagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TagsOnPremises], {
    nullable: false
  })
  async tagsOnPremises(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TagTagsOnPremisesArgs): Promise<TagsOnPremises[]> {
    return getPrismaFromContext(ctx).tag.findUnique({
      where: {
        id: tag.id,
      },
    }).tagsOnPremises(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TagsOnTimelines], {
    nullable: false
  })
  async tagsOnTimelines(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TagTagsOnTimelinesArgs): Promise<TagsOnTimelines[]> {
    return getPrismaFromContext(ctx).tag.findUnique({
      where: {
        id: tag.id,
      },
    }).tagsOnTimelines(args);
  }
}
