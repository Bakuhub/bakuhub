import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput";
import { PremiseCreateWithoutActiveVisionOnPremiseInput } from "../inputs/PremiseCreateWithoutActiveVisionOnPremiseInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput", {
  isAbstract: true
})
export class PremiseCreateNestedOneWithoutActiveVisionOnPremiseInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutActiveVisionOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutActiveVisionOnPremiseInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;
}
