import * as TypeGraphQL from "type-graphql";
import { Tag } from "../../../models/Tag";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { Timeline } from "../../../models/Timeline";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TagsOnTimelines)
export class TagsOnTimelinesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false
  })
  async tag(@TypeGraphQL.Root() tagsOnTimelines: TagsOnTimelines, @TypeGraphQL.Ctx() ctx: any): Promise<Tag> {
    return getPrismaFromContext(ctx).tagsOnTimelines.findUnique({
      where: {
        tagId_timelineId: {
          tagId: tagsOnTimelines.tagId,
          timelineId: tagsOnTimelines.timelineId,
        },
      },
    }).tag({});
  }

  @TypeGraphQL.FieldResolver(_type => Timeline, {
    nullable: false
  })
  async timeline(@TypeGraphQL.Root() tagsOnTimelines: TagsOnTimelines, @TypeGraphQL.Ctx() ctx: any): Promise<Timeline> {
    return getPrismaFromContext(ctx).tagsOnTimelines.findUnique({
      where: {
        tagId_timelineId: {
          tagId: tagsOnTimelines.tagId,
          timelineId: tagsOnTimelines.timelineId,
        },
      },
    }).timeline({});
  }
}
