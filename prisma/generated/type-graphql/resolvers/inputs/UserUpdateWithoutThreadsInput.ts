import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremiseUpdateManyWithoutAuthorInput } from "../inputs/PremiseUpdateManyWithoutAuthorInput";
import { ReactionOnThreadUpdateManyWithoutUserInput } from "../inputs/ReactionOnThreadUpdateManyWithoutUserInput";
import { ReactionOnTimelineUpdateManyWithoutUserInput } from "../inputs/ReactionOnTimelineUpdateManyWithoutUserInput";
import { ReactionOnVisionUpdateManyWithoutUserInput } from "../inputs/ReactionOnVisionUpdateManyWithoutUserInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TimelineUpdateManyWithoutAuthorInput } from "../inputs/TimelineUpdateManyWithoutAuthorInput";
import { VisionUpdateManyWithoutAuthorInput } from "../inputs/VisionUpdateManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserUpdateWithoutThreadsInput", {
  isAbstract: true
})
export class UserUpdateWithoutThreadsInput {
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

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  visions?: VisionUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  timelines?: TimelineUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadUpdateManyWithoutUserInput, {
    nullable: true
  })
  ReactionOnThread?: ReactionOnThreadUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelineUpdateManyWithoutUserInput, {
    nullable: true
  })
  ReactionOnTimeline?: ReactionOnTimelineUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionUpdateManyWithoutUserInput, {
    nullable: true
  })
  ReactionOnVision?: ReactionOnVisionUpdateManyWithoutUserInput | undefined;
}
