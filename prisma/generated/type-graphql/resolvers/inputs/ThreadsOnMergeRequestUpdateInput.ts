import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput";
import { ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestUpdateInput {
  @TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  thread?: ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  mergeRequest?: MergeRequestUpdateOneRequiredWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
