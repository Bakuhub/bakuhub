import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesCreateWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateWithoutPremiseInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../inputs/PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateOrConnectWithoutPremiseInput", {
  isAbstract: true
})
export class PremisesOnTimelinesCreateOrConnectWithoutPremiseInput {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: PremisesOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: PremisesOnTimelinesCreateWithoutPremiseInput;
}
