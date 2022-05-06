import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ThreadUpdateOneRequiredWithoutVotesOnThreadInput } from "../inputs/ThreadUpdateOneRequiredWithoutVotesOnThreadInput";

@TypeGraphQL.InputType("VotesOnThreadUpdateWithoutUserInput", {
  isAbstract: true
})
export class VotesOnThreadUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => ThreadUpdateOneRequiredWithoutVotesOnThreadInput, {
    nullable: true
  })
  thread?: ThreadUpdateOneRequiredWithoutVotesOnThreadInput | undefined;

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
