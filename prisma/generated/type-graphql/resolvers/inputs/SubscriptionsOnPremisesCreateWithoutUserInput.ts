import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput } from "../inputs/PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput";
import { SubscriptionType } from "../../enums/SubscriptionType";

@TypeGraphQL.InputType("SubscriptionsOnPremisesCreateWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasUnreadNotifications?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastReadAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SubscriptionType, {
    nullable: true
  })
  type?: "AUTO" | "MANUAL" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
