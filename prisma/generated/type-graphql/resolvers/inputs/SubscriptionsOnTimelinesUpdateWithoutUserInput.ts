import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSubscriptionTypeFieldUpdateOperationsInput } from "../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput";
import { TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  timeline?: TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput | undefined;

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
