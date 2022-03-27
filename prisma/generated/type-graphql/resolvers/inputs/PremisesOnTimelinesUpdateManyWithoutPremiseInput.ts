import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesCreateManyPremiseInputEnvelope } from "../inputs/PremisesOnTimelinesCreateManyPremiseInputEnvelope";
import { PremisesOnTimelinesCreateOrConnectWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateOrConnectWithoutPremiseInput";
import { PremisesOnTimelinesCreateWithoutPremiseInput } from "../inputs/PremisesOnTimelinesCreateWithoutPremiseInput";
import { PremisesOnTimelinesScalarWhereInput } from "../inputs/PremisesOnTimelinesScalarWhereInput";
import { PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput";
import { PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput";
import { PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../inputs/PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpdateManyWithoutPremiseInput", {
  isAbstract: true
})
export class PremisesOnTimelinesUpdateManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: PremisesOnTimelinesCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: PremisesOnTimelinesCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  upsert?: PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: PremisesOnTimelinesCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  set?: PremisesOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  delete?: PremisesOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  update?: PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput], {
    nullable: true
  })
  updateMany?: PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PremisesOnTimelinesScalarWhereInput[] | undefined;
}
