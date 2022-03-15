import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseUpdateManyWithoutVisionInput } from "../inputs/ActiveVisionOnPremiseUpdateManyWithoutVisionInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutVisionInput } from "../inputs/PremiseUpdateOneRequiredWithoutVisionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("VisionUpdateWithoutAuthorInput", {
  isAbstract: true
})
export class VisionUpdateWithoutAuthorInput {
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

  @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVisionInput, {
    nullable: true
  })
  premise?: PremiseUpdateOneRequiredWithoutVisionInput | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseUpdateManyWithoutVisionInput, {
    nullable: true
  })
  activeVisionOnPremise?: ActiveVisionOnPremiseUpdateManyWithoutVisionInput | undefined;
}
