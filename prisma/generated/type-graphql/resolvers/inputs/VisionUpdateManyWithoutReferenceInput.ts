import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyReferenceInputEnvelope } from "../inputs/VisionCreateManyReferenceInputEnvelope";
import { VisionCreateOrConnectWithoutReferenceInput } from "../inputs/VisionCreateOrConnectWithoutReferenceInput";
import { VisionCreateWithoutReferenceInput } from "../inputs/VisionCreateWithoutReferenceInput";
import { VisionScalarWhereInput } from "../inputs/VisionScalarWhereInput";
import { VisionUpdateManyWithWhereWithoutReferenceInput } from "../inputs/VisionUpdateManyWithWhereWithoutReferenceInput";
import { VisionUpdateWithWhereUniqueWithoutReferenceInput } from "../inputs/VisionUpdateWithWhereUniqueWithoutReferenceInput";
import { VisionUpsertWithWhereUniqueWithoutReferenceInput } from "../inputs/VisionUpsertWithWhereUniqueWithoutReferenceInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateManyWithoutReferenceInput", {
  isAbstract: true
})
export class VisionUpdateManyWithoutReferenceInput {
  @TypeGraphQL.Field(_type => [VisionCreateWithoutReferenceInput], {
    nullable: true
  })
  create?: VisionCreateWithoutReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutReferenceInput], {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutReferenceInput], {
    nullable: true
  })
  upsert?: VisionUpsertWithWhereUniqueWithoutReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => VisionCreateManyReferenceInputEnvelope, {
    nullable: true
  })
  createMany?: VisionCreateManyReferenceInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutReferenceInput], {
    nullable: true
  })
  update?: VisionUpdateWithWhereUniqueWithoutReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutReferenceInput], {
    nullable: true
  })
  updateMany?: VisionUpdateManyWithWhereWithoutReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VisionScalarWhereInput[] | undefined;
}
