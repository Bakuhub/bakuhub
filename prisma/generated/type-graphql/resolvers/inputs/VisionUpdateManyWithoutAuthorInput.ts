import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyAuthorInputEnvelope } from "../inputs/VisionCreateManyAuthorInputEnvelope";
import { VisionCreateOrConnectWithoutAuthorInput } from "../inputs/VisionCreateOrConnectWithoutAuthorInput";
import { VisionCreateWithoutAuthorInput } from "../inputs/VisionCreateWithoutAuthorInput";
import { VisionScalarWhereInput } from "../inputs/VisionScalarWhereInput";
import { VisionUpdateManyWithWhereWithoutAuthorInput } from "../inputs/VisionUpdateManyWithWhereWithoutAuthorInput";
import { VisionUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/VisionUpdateWithWhereUniqueWithoutAuthorInput";
import { VisionUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/VisionUpsertWithWhereUniqueWithoutAuthorInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class VisionUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [VisionCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: VisionCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: VisionUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => VisionCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: VisionCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: VisionUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: VisionUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VisionScalarWhereInput[] | undefined;
}
