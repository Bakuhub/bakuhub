import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutVotesOnPremiseInput } from "../inputs/PremiseUpdateOneRequiredWithoutVotesOnPremiseInput";
import { UserUpdateOneRequiredWithoutVotesOnPremiseInput } from "../inputs/UserUpdateOneRequiredWithoutVotesOnPremiseInput";

@TypeGraphQL.InputType("VotesOnPremiseUpdateInput", {
  isAbstract: true
})
export class VotesOnPremiseUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVotesOnPremiseInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutVotesOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutVotesOnPremiseInput, {
    nullable: true
  })
  premise?: PremiseUpdateOneRequiredWithoutVotesOnPremiseInput | undefined;

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
