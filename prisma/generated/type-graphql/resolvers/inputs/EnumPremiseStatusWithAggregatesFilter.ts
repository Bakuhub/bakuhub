import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPremiseStatusFilter } from "../inputs/NestedEnumPremiseStatusFilter";
import { NestedEnumPremiseStatusWithAggregatesFilter } from "../inputs/NestedEnumPremiseStatusWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { PremiseStatus } from "../../enums/PremiseStatus";

@TypeGraphQL.InputType("EnumPremiseStatusWithAggregatesFilter", {
  isAbstract: true
})
export class EnumPremiseStatusWithAggregatesFilter {
  @TypeGraphQL.Field(_type => PremiseStatus, {
    nullable: true
  })
  equals?: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION" | undefined;

  @TypeGraphQL.Field(_type => [PremiseStatus], {
    nullable: true
  })
  in?: Array<"RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION"> | undefined;

  @TypeGraphQL.Field(_type => [PremiseStatus], {
    nullable: true
  })
  notIn?: Array<"RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPremiseStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumPremiseStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumPremiseStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumPremiseStatusFilter | undefined;
}
