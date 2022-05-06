import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ThreadUpdateOneRequiredWithoutThreadsOnVisionInput } from "../inputs/ThreadUpdateOneRequiredWithoutThreadsOnVisionInput";

@TypeGraphQL.InputType("ThreadsOnVisionUpdateWithoutVisionInput", {
  isAbstract: true
})
export class ThreadsOnVisionUpdateWithoutVisionInput {
  @TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnVisionInput, {
    nullable: true
  })
  thread?: ThreadUpdateOneRequiredWithoutThreadsOnVisionInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
