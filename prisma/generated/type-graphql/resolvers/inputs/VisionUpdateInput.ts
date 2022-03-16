import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutVisionInput } from "../inputs/PremiseUpdateOneRequiredWithoutVisionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutVisionInput } from "../inputs/UserUpdateOneWithoutVisionInput";
import { VisionUpdateManyWithoutPrevVisionInput } from "../inputs/VisionUpdateManyWithoutPrevVisionInput";
import { VisionUpdateOneWithoutNextVisionInput } from "../inputs/VisionUpdateOneWithoutNextVisionInput";

@TypeGraphQL.InputType("VisionUpdateInput", {
  isAbstract: true
})
export class VisionUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  activityDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  reference?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutVisionInput, {
    nullable: true
  })
  author?: UserUpdateOneWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVisionInput, {
    nullable: true
  })
  premise?: PremiseUpdateOneRequiredWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateOneWithoutNextVisionInput, {
    nullable: true
  })
  prevVision?: VisionUpdateOneWithoutNextVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutPrevVisionInput, {
    nullable: true
  })
  nextVision?: VisionUpdateManyWithoutPrevVisionInput | undefined;
}
