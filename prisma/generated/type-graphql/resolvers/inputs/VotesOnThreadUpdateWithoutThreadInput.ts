import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutVotesOnThreadInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnThreadInput";

@TypeGraphQL.InputType("VotesOnThreadUpdateWithoutThreadInput", {
  isAbstract: true
})
export class VotesOnThreadUpdateWithoutThreadInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnThreadInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutVotesOnThreadInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  vote?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
