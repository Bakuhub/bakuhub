import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { ThreadUpdateManyWithoutParentThreadInput } from "../inputs/ThreadUpdateManyWithoutParentThreadInput";
import { ThreadUpdateOneWithoutChildThreadsInput } from "../inputs/ThreadUpdateOneWithoutChildThreadsInput";

@TypeGraphQL.InputType("ThreadUpdateWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadUpdateWithoutPremiseInput {
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

  @TypeGraphQL.Field(_type => ThreadUpdateOneWithoutChildThreadsInput, {
    nullable: true
  })
  parentThread?: ThreadUpdateOneWithoutChildThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateManyWithoutParentThreadInput, {
    nullable: true
  })
  childThreads?: ThreadUpdateManyWithoutParentThreadInput | undefined;
}
