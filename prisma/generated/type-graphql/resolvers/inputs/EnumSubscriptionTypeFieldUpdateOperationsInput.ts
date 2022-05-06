import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionType } from "../../enums/SubscriptionType";

@TypeGraphQL.InputType("EnumSubscriptionTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumSubscriptionTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => SubscriptionType, {
    nullable: true
  })
  set?: "AUTO" | "MANUAL" | undefined;
}
