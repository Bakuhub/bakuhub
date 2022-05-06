import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremiseUpdateManyWithoutAuthorInput } from "../inputs/PremiseUpdateManyWithoutAuthorInput";
import { ReactionOnThreadsUpdateManyWithoutUserInput } from "../inputs/ReactionOnThreadsUpdateManyWithoutUserInput";
import { ReactionOnTimelinesUpdateManyWithoutUserInput } from "../inputs/ReactionOnTimelinesUpdateManyWithoutUserInput";
import { ReactionOnVisionsUpdateManyWithoutUserInput } from "../inputs/ReactionOnVisionsUpdateManyWithoutUserInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubscriptionsOnPremisesUpdateManyWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpdateManyWithoutUserInput";
import { SubscriptionsOnTimelinesUpdateManyWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithoutUserInput";
import { ThreadUpdateManyWithoutAuthorInput } from "../inputs/ThreadUpdateManyWithoutAuthorInput";
import { TimelineUpdateManyWithoutAuthorInput } from "../inputs/TimelineUpdateManyWithoutAuthorInput";
import { VisionUpdateManyWithoutAuthorInput } from "../inputs/VisionUpdateManyWithoutAuthorInput";
import { VotesOnPremiseUpdateManyWithoutUserInput } from "../inputs/VotesOnPremiseUpdateManyWithoutUserInput";
import { VotesOnTimelineUpdateManyWithoutUserInput } from "../inputs/VotesOnTimelineUpdateManyWithoutUserInput";
import { VotesOnVisionUpdateManyWithoutUserInput } from "../inputs/VotesOnVisionUpdateManyWithoutUserInput";

@TypeGraphQL.InputType("UserUpdateWithoutVotesOnThreadInput", {
  isAbstract: true
})
export class UserUpdateWithoutVotesOnThreadInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput, {
    nullable: true
  })
  accounts?: AccountUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput, {
    nullable: true
  })
  sessions?: SessionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  premises?: PremiseUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  threads?: ThreadUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  visions?: VisionUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  timelines?: TimelineUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyWithoutUserInput, {
    nullable: true
  })
  reactionOnThreads?: ReactionOnThreadsUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutUserInput, {
    nullable: true
  })
  reactionOnTimelines?: ReactionOnTimelinesUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutUserInput, {
    nullable: true
  })
  reactionOnVisions?: ReactionOnVisionsUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionUpdateManyWithoutUserInput, {
    nullable: true
  })
  votesOnVision?: VotesOnVisionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutUserInput, {
    nullable: true
  })
  votesOnTimeline?: VotesOnTimelineUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyWithoutUserInput, {
    nullable: true
  })
  votesOnPremise?: VotesOnPremiseUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyWithoutUserInput, {
    nullable: true
  })
  subscriptionsOnPremises?: SubscriptionsOnPremisesUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyWithoutUserInput, {
    nullable: true
  })
  subscriptionsOnTimelines?: SubscriptionsOnTimelinesUpdateManyWithoutUserInput | undefined;
}
