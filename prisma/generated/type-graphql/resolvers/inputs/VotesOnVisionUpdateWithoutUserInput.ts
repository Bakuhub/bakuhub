import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { VisionUpdateOneRequiredWithoutVotesOnVisionInput } from "../inputs/VisionUpdateOneRequiredWithoutVotesOnVisionInput";

@TypeGraphQL.InputType("VotesOnVisionUpdateWithoutUserInput", {
  isAbstract: true
})
export class VotesOnVisionUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutVotesOnVisionInput, {
    nullable: true
  })
  vision?: VisionUpdateOneRequiredWithoutVotesOnVisionInput | undefined;

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
