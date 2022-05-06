import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremisesOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput";
import { ReactionOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput";
import { ThreadsOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput";
import { UserUpdateOneRequiredWithoutTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutTimelinesInput";
import { VotesOnTimelineUpdateManyWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateManyWithoutTimelineInput";

@TypeGraphQL.InputType("TimelineUpdateWithoutTagsOnTimelinesInput", {
  isAbstract: true
})
export class TimelineUpdateWithoutTagsOnTimelinesInput {
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

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTimelinesInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesUpdateManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  threadsOnTimeline?: ThreadsOnTimelineUpdateManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  reactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  votesOnTimeline?: VotesOnTimelineUpdateManyWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput, {
    nullable: true
  })
  subscriptionsOnTimelines?: SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput | undefined;
}
