import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput";
import { ReactionOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/ReactionOnTimelineUpdateManyWithoutTimelineInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TagsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput";
import { ThreadsOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput";
import { UserUpdateOneRequiredWithoutTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutTimelinesInput";

@TypeGraphQL.InputType("TimelineUpdateInput", {
  isAbstract: true
})
export class TimelineUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTimelinesInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  tagsOnTimelines?: TagsOnTimelinesUpdateManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  threadsOnTimeline?: ThreadsOnTimelineUpdateManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelineUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  ReactionOnTimeline?: ReactionOnTimelineUpdateManyWithoutTimelineInput | undefined;
}
