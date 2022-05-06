import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumSubscriptionTypeFilter } from "../inputs/NestedEnumSubscriptionTypeFilter";
import { NestedEnumSubscriptionTypeWithAggregatesFilter } from "../inputs/NestedEnumSubscriptionTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { SubscriptionType } from "../../enums/SubscriptionType";

@TypeGraphQL.InputType("EnumSubscriptionTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumSubscriptionTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumSubscriptionTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumSubscriptionTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumSubscriptionTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumSubscriptionTypeFilter | undefined;
}
