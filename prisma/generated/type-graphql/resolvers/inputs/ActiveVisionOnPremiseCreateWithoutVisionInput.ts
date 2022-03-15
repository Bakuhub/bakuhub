import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput";

@TypeGraphQL.InputType("ActiveVisionOnPremiseCreateWithoutVisionInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseCreateWithoutVisionInput {
  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput;
}
