import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestUpdateWithoutThreadInput {
  @TypeGraphQL.Field(_type => MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  mergeRequest?: MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
