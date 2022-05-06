import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSubscriptionTypeFilter } from "../inputs/NestedEnumSubscriptionTypeFilter";
import { SubscriptionType } from "../../enums/SubscriptionType";

@TypeGraphQL.InputType("EnumSubscriptionTypeFilter", {
  isAbstract: true
})
export class EnumSubscriptionTypeFilter {
  @TypeGraphQL.Field(_type => SubscriptionType, {
    nullable: true
  })
  equals?: "AUTO" | "MANUAL" | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionType], {
    nullable: true
  })
  in?: Array<"AUTO" | "MANUAL"> | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionType], {
    nullable: true
  })
  notIn?: Array<"AUTO" | "MANUAL"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeFilter, {
    nullable: true
  })
  not?: NestedEnumSubscriptionTypeFilter | undefined;
}
