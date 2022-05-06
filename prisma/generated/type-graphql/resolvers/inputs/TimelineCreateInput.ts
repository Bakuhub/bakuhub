import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ReactionOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput";
import { SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput";
import { TagsOnTimelinesCreateNestedManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput";
import { ThreadsOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput";
import { UserCreateNestedOneWithoutTimelinesInput } from "../inputs/UserCreateNestedOneWithoutTimelinesInput";
import { VotesOnTimelineCreateNestedManyWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput";

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
    nullable: true
  })
  status?: string | undefined;

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

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutTimelineInput, {
    nullable: true
  })
  reactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutTimelineInput, {
    nullable: true
  })
  votesOnTimeline?: VotesOnTimelineCreateNestedManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput, {
    nullable: true
  })
  subscriptionsOnTimelines?: SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput | undefined;
}
