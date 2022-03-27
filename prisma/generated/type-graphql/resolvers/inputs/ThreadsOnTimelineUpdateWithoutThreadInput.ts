import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput } from "../inputs/TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput";

@TypeGraphQL.InputType("ThreadsOnTimelineUpdateWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnTimelineUpdateWithoutThreadInput {
  @TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput, {
    nullable: true
  })
  timeline?: TimelineUpdateOneRequiredWithoutThreadsOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
