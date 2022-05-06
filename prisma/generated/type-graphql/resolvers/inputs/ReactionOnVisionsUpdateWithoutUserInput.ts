import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { VisionUpdateOneRequiredWithoutReactionOnVisionsInput } from "../inputs/VisionUpdateOneRequiredWithoutReactionOnVisionsInput";

@TypeGraphQL.InputType("ReactionOnVisionsUpdateWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnVisionsUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutReactionOnVisionsInput, {
    nullable: true
  })
  vision?: VisionUpdateOneRequiredWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput, {
    nullable: true
  })
  reaction?: EnumReactionFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
