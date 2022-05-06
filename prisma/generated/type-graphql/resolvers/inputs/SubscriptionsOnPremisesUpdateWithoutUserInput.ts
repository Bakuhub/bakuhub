import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  premise?: PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  hasUnreadNotifications?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  lastReadAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumSubscriptionTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
