import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReactionFieldUpdateOperationsInput } from "../inputs/EnumReactionFieldUpdateOperationsInput";
import { ThreadUpdateOneRequiredWithoutReactionOnThreadsInput } from "../inputs/ThreadUpdateOneRequiredWithoutReactionOnThreadsInput";
import { UserUpdateOneRequiredWithoutReactionOnThreadsInput } from "../inputs/UserUpdateOneRequiredWithoutReactionOnThreadsInput";

@TypeGraphQL.InputType("ReactionOnThreadsUpdateInput", {
  isAbstract: true
})
export class ReactionOnThreadsUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReactionOnThreadsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutReactionOnThreadsInput, {
    nullable: true
  })
  thread?: ThreadUpdateOneRequiredWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFieldUpdateOperationsInput, {
    nullable: true
  })
  reaction?: EnumReactionFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
