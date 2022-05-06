import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutVisionInput } from "../inputs/PremiseUpdateOneRequiredWithoutVisionInput";
import { ReactionOnVisionsUpdateManyWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateManyWithoutVisionInput";
import { ReferenceUpdateOneWithoutVisionInput } from "../inputs/ReferenceUpdateOneWithoutVisionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadsOnVisionUpdateManyWithoutVisionInput } from "../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput";
import { UserUpdateOneWithoutVisionsInput } from "../inputs/UserUpdateOneWithoutVisionsInput";
import { VisionUpdateManyWithoutPrevVisionInput } from "../inputs/VisionUpdateManyWithoutPrevVisionInput";
import { VisionUpdateOneWithoutNextVisionsInput } from "../inputs/VisionUpdateOneWithoutNextVisionsInput";
import { VotesOnVisionUpdateManyWithoutVisionInput } from "../inputs/VotesOnVisionUpdateManyWithoutVisionInput";

@TypeGraphQL.InputType("VisionUpdateWithoutMergeRequestInput", {
  isAbstract: true
})
export class VisionUpdateWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  activityDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ReferenceUpdateOneWithoutVisionInput, {
    nullable: true
  })
  reference?: ReferenceUpdateOneWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutVisionsInput, {
    nullable: true
  })
  author?: UserUpdateOneWithoutVisionsInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVisionInput, {
    nullable: true
  })
  premise?: PremiseUpdateOneRequiredWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  draftMode?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateOneWithoutNextVisionsInput, {
    nullable: true
  })
  prevVision?: VisionUpdateOneWithoutNextVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutPrevVisionInput, {
    nullable: true
  })
  nextVisions?: VisionUpdateManyWithoutPrevVisionInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyWithoutVisionInput, {
    nullable: true
  })
  threadsOnVision?: ThreadsOnVisionUpdateManyWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutVisionInput, {
    nullable: true
  })
  reactionOnVisions?: ReactionOnVisionsUpdateManyWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionUpdateManyWithoutVisionInput, {
    nullable: true
  })
  votesOnVision?: VotesOnVisionUpdateManyWithoutVisionInput | undefined;
}
