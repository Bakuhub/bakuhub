import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutVisionInput } from "../inputs/PremiseUpdateOneRequiredWithoutVisionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadsOnVisionUpdateManyWithoutVisionInput } from "../inputs/ThreadsOnVisionUpdateManyWithoutVisionInput";
import { UserUpdateOneWithoutVisionInput } from "../inputs/UserUpdateOneWithoutVisionInput";
import { VisionUpdateManyWithoutPrevVisionInput } from "../inputs/VisionUpdateManyWithoutPrevVisionInput";

@TypeGraphQL.InputType("VisionUpdateWithoutPrevVisionInput", {
  isAbstract: true
})
export class VisionUpdateWithoutPrevVisionInput {
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

  @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVisionInput, {
    nullable: true
  })
  premise?: PremiseUpdateOneRequiredWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  thumbnail?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutPrevVisionInput, {
    nullable: true
  })
  nextVision?: VisionUpdateManyWithoutPrevVisionInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyWithoutVisionInput, {
    nullable: true
  })
  threadsOnVision?: ThreadsOnVisionUpdateManyWithoutVisionInput | undefined;
}
