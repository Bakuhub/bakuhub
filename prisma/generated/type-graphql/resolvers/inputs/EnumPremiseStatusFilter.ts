import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPremiseStatusFilter } from "../inputs/NestedEnumPremiseStatusFilter";
import { PremiseStatus } from "../../enums/PremiseStatus";

@TypeGraphQL.InputType("EnumPremiseStatusFilter", {
  isAbstract: true
})
export class EnumPremiseStatusFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumPremiseStatusFilter, {
    nullable: true
  })
  not?: NestedEnumPremiseStatusFilter | undefined;
}
