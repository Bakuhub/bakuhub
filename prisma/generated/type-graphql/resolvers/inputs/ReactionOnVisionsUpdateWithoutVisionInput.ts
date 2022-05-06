import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionOnVisionsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnVisionsInput";

@TypeGraphQL.InputType("ReactionOnVisionsUpdateWithoutVisionInput", {
  isAbstract: true
})
export class ReactionOnVisionsUpdateWithoutVisionInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnVisionsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput, {
    nullable: true
  })
  reaction?: EnumReactionFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
