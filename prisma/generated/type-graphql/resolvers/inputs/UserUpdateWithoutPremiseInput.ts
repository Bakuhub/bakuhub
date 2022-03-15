import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TimelineUpdateManyWithoutAuthorInput } from "../inputs/TimelineUpdateManyWithoutAuthorInput";
import { VisionUpdateManyWithoutAuthorInput } from "../inputs/VisionUpdateManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserUpdateWithoutPremiseInput", {
  isAbstract: true
})
export class UserUpdateWithoutPremiseInput {
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

  @TypeGraphQL.Field(_type => VisionUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  vision?: VisionUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => TimelineUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  timeline?: TimelineUpdateManyWithoutAuthorInput | undefined;
}
