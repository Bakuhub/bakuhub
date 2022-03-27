import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateOrConnectWithoutPremisesOnTimelinesInput";
import { PremiseCreateWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateWithoutPremisesOnTimelinesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedOneWithoutPremisesOnTimelinesInput", {
  isAbstract: true
})
export class PremiseCreateNestedOneWithoutPremisesOnTimelinesInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutPremisesOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;
}
