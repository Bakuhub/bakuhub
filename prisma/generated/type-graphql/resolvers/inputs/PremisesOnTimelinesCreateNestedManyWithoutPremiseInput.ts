import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesCreateManyPremiseInputEnvelope } from "../inputs/PremisesOnTimelinesCreateManyPremiseInputEnvelope";
import { PremisesOnTimelinesCreateOrConnectWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateOrConnectWithoutPremiseInput";
import { PremisesOnTimelinesCreateWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateWithoutPremiseInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../inputs/PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateNestedManyWithoutPremiseInput", {
  isAbstract: true
})
export class PremisesOnTimelinesCreateNestedManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: PremisesOnTimelinesCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: PremisesOnTimelinesCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: PremisesOnTimelinesCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
}
