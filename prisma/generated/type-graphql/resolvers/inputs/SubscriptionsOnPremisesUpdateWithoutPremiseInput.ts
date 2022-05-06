import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput } from "../inputs/UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateWithoutPremiseInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesUpdateWithoutPremiseInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput | undefined;

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
