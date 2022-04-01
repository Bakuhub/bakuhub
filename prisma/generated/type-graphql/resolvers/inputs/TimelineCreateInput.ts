import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ReactionOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/ReactionOnTimelineCreateNestedManyWithoutTimelineInput";
import { TagsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ThreadsOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput";
import { UserCreateNestedOneWithoutTimelinesInput } from "../inputs/UserCreateNestedOneWithoutTimelinesInput";

@TypeGraphQL.InputType("TimelineCreateInput", {
  isAbstract: true
})
export class TimelineCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTimelinesInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutTimelinesInput;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutTimelineInput, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTimelineInput, {
    nullable: true
  })
  tagsOnTimelines?: TagsOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedManyWithoutTimelineInput, {
    nullable: true
  })
  threadsOnTimeline?: ThreadsOnTimelineCreateNestedManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelineCreateNestedManyWithoutTimelineInput, {
    nullable: true
  })
  ReactionOnTimeline?: ReactionOnTimelineCreateNestedManyWithoutTimelineInput | undefined;
}
