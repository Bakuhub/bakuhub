import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutThreadInput } from "../inputs/PremiseUpdateOneRequiredWithoutThreadInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadUpdateManyWithoutParentThreadInput } from "../inputs/ThreadUpdateManyWithoutParentThreadInput";

@TypeGraphQL.InputType("ThreadUpdateWithoutParentThreadInput", {
  isAbstract: true
})
export class ThreadUpdateWithoutParentThreadInput {
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

  @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutThreadInput, {
    nullable: true
  })
  premise?: PremiseUpdateOneRequiredWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateManyWithoutParentThreadInput, {
    nullable: true
  })
  childThreads?: ThreadUpdateManyWithoutParentThreadInput | undefined;
}
