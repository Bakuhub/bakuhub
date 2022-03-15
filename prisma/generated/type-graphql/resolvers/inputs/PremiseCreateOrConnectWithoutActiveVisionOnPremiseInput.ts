import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseCreateWithoutActiveVisionOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput", {
  isAbstract: true
})
export class PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: false
  })
  where!: PremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremiseCreateWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  create!: PremiseCreateWithoutActiveVisionOnPremiseInput;
}
