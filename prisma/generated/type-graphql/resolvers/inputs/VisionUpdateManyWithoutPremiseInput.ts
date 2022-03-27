import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyPremiseInputEnvelope } from "../inputs/VisionCreateManyPremiseInputEnvelope";
import { VisionCreateOrConnectWithoutPremiseInput } from "../inputs/VisionCreateOrConnectWithoutPremiseInput";
import { VisionCreateWithoutPremiseInput } from "../inputs/VisionCreateWithoutPremiseInput";
import { VisionScalarWhereInput } from "../inputs/VisionScalarWhereInput";
import { VisionUpdateManyWithWhereWithoutPremiseInput } from "../inputs/VisionUpdateManyWithWhereWithoutPremiseInput";
import { VisionUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/VisionUpdateWithWhereUniqueWithoutPremiseInput";
import { VisionUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/VisionUpsertWithWhereUniqueWithoutPremiseInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateManyWithoutPremiseInput", {
  isAbstract: true
})
export class VisionUpdateManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [VisionCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: VisionCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  upsert?: VisionUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => VisionCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: VisionCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
    nullable: true
  })
  set?: VisionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VisionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
    nullable: true
  })
  delete?: VisionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
    nullable: true
  })
  connect?: VisionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  update?: VisionUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutPremiseInput], {
    nullable: true
  })
  updateMany?: VisionUpdateManyWithWhereWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VisionScalarWhereInput[] | undefined;
}
