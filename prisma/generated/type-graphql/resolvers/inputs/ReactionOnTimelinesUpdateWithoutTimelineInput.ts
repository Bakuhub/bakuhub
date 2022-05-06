import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionOnTimelinesInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnTimelinesInput";

@TypeGraphQL.InputType("ReactionOnTimelinesUpdateWithoutTimelineInput", {
  isAbstract: true
})
export class ReactionOnTimelinesUpdateWithoutTimelineInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput, {
    nullable: true
  })
  reaction?: EnumReactionFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
