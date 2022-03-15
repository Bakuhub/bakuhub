import * as TypeGraphQL from "type-graphql";
import { PremisesOnTimelines } from "../../../models/PremisesOnTimelines";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
import { Timeline } from "../../../models/Timeline";
import { User } from "../../../models/User";
import { TimelinePremisesOnTimelinesArgs } from "./args/TimelinePremisesOnTimelinesArgs";
import { TimelineTagsOnTimelinesArgs } from "./args/TimelineTagsOnTimelinesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Timeline)
export class TimelineRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [PremisesOnTimelines], {
    nullable: false
  })
  async premisesOnTimelines(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TimelinePremisesOnTimelinesArgs): Promise<PremisesOnTimelines[]> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).premisesOnTimelines(args);
  }

  @TypeGraphQL.FieldResolver(_type => [TagsOnTimelines], {
    nullable: false
  })
  async tagsOnTimelines(@TypeGraphQL.Root() timeline: Timeline, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TimelineTagsOnTimelinesArgs): Promise<TagsOnTimelines[]> {
    return getPrismaFromContext(ctx).timeline.findUnique({
      where: {
        id: timeline.id,
      },
    }).tagsOnTimelines(args);
  }
}
