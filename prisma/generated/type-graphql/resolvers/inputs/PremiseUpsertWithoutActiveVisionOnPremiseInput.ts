import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseCreateWithoutActiveVisionOnPremiseInput";
import { PremiseUpdateWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseUpdateWithoutActiveVisionOnPremiseInput";

@TypeGraphQL.InputType("PremiseUpsertWithoutActiveVisionOnPremiseInput", {
  isAbstract: true
})
export class PremiseUpsertWithoutActiveVisionOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseUpdateWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  update!: PremiseUpdateWithoutActiveVisionOnPremiseInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutActiveVisionOnPremiseInput;
}
