import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput";

@TypeGraphQL.InputType("ReactionOnTimelinesUpdateWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnTimelinesUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  timeline?: TimelineUpdateOneRequiredWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput, {
    nullable: true
  })
  reaction?: EnumReactionFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
