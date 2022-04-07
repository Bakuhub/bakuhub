import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReactionOnThreadsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnThreadsInput";

@TypeGraphQL.InputType("ReactionOnThreadsUpdateWithoutThreadInput", {
  isAbstract: true
})
export class ReactionOnThreadsUpdateWithoutThreadInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnThreadsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput, {
    nullable: true
  })
  reaction?: EnumReactionFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
