import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MergeRequestUpdateOneWithoutVisionInput } from "../inputs/MergeRequestUpdateOneWithoutVisionInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadsOnVisionUpdateManyWithoutVisionInput } from "../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput";
import { UserUpdateOneWithoutVisionInput } from "../inputs/UserUpdateOneWithoutVisionInput";
import { VisionUpdateManyWithoutPrevVisionInput } from "../inputs/VisionUpdateManyWithoutPrevVisionInput";
import { VisionUpdateOneWithoutNextVisionInput } from "../inputs/VisionUpdateOneWithoutNextVisionInput";

@TypeGraphQL.InputType("VisionUpdateWithoutPremiseInput", {
  isAbstract: true
})
export class VisionUpdateWithoutPremiseInput {
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
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  reference?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutVisionInput, {
    nullable: true
  })
  author?: UserUpdateOneWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  draftMode?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateOneWithoutNextVisionInput, {
    nullable: true
  })
  prevVision?: VisionUpdateOneWithoutNextVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutPrevVisionInput, {
    nullable: true
  })
  nextVision?: VisionUpdateManyWithoutPrevVisionInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyWithoutVisionInput, {
    nullable: true
  })
  threadsOnVision?: ThreadsOnVisionUpdateManyWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestUpdateOneWithoutVisionInput, {
    nullable: true
  })
  mergeRequest?: MergeRequestUpdateOneWithoutVisionInput | undefined;
}
