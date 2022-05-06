import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpdateWithoutPremiseInput", {
  isAbstract: true
})
export class PremisesOnTimelinesUpdateWithoutPremiseInput {
  @TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  timeline?: TimelineUpdateOneRequiredWithoutPremisesOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  assignedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
