import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateOrConnectWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateOrConnectWithoutPremisesOnTimelinesInput";
import { PremiseCreateWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateWithoutPremisesOnTimelinesInput";
import { PremiseUpdateWithoutPremisesOnTimelinesInput } from "../inputs/PremiseUpdateWithoutPremisesOnTimelinesInput";
import { PremiseUpsertWithoutPremisesOnTimelinesInput } from "../inputs/PremiseUpsertWithoutPremisesOnTimelinesInput";
import { PremiseWhereUniqueInput } from "../inputs/PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput", {
  isAbstract: true
})
export class PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput {
  @TypeGraphQL.Field(_type => PremiseCreateWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  create?: PremiseCreateWithoutPremisesOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: PremiseCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpsertWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  upsert?: PremiseUpsertWithoutPremisesOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
    nullable: true
  })
  connect?: PremiseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PremiseUpdateWithoutPremisesOnTimelinesInput, {
    nullable: true
  })
  update?: PremiseUpdateWithoutPremisesOnTimelinesInput | undefined;
}
