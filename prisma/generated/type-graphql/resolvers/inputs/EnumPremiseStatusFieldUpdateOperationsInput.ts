import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseStatus } from "../../enums/PremiseStatus";

@TypeGraphQL.InputType("EnumPremiseStatusFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumPremiseStatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PremiseStatus, {
    nullable: true
  })
  set?: "RUMOUR" | "UNVERIFIED" | "REFERENCE_PROVIDED" | "VERIFIED" | "MISINFORMATION" | undefined;
}
