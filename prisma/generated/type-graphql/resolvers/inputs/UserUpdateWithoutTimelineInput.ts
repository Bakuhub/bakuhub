import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PremiseUpdateManyWithoutAuthorInput } from "../inputs/PremiseUpdateManyWithoutAuthorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VisionUpdateManyWithoutAuthorInput } from "../inputs/VisionUpdateManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserUpdateWithoutTimelineInput", {
  isAbstract: true
})
export class UserUpdateWithoutTimelineInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  premise?: PremiseUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  vision?: VisionUpdateManyWithoutAuthorInput | undefined;
}
