import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyPrevVisionInputEnvelope } from "../inputs/VisionCreateManyPrevVisionInputEnvelope";
import { VisionCreateOrConnectWithoutPrevVisionInput } from "../inputs/VisionCreateOrConnectWithoutPrevVisionInput";
import { VisionCreateWithoutPrevVisionInput } from "../inputs/VisionCreateWithoutPrevVisionInput";
import { VisionScalarWhereInput } from "../inputs/VisionScalarWhereInput";
import { VisionUpdateManyWithWhereWithoutPrevVisionInput } from "../inputs/VisionUpdateManyWithWhereWithoutPrevVisionInput";
import { VisionUpdateWithWhereUniqueWithoutPrevVisionInput } from "../inputs/VisionUpdateWithWhereUniqueWithoutPrevVisionInput";
import { VisionUpsertWithWhereUniqueWithoutPrevVisionInput } from "../inputs/VisionUpsertWithWhereUniqueWithoutPrevVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateManyWithoutPrevVisionInput", {
  isAbstract: true
})
export class VisionUpdateManyWithoutPrevVisionInput {
  @TypeGraphQL.Field(_type => [VisionCreateWithoutPrevVisionInput], {
    nullable: true
  })
  create?: VisionCreateWithoutPrevVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPrevVisionInput], {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutPrevVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutPrevVisionInput], {
    nullable: true
  })
  upsert?: VisionUpsertWithWhereUniqueWithoutPrevVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => VisionCreateManyPrevVisionInputEnvelope, {
    nullable: true
  })
  createMany?: VisionCreateManyPrevVisionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutPrevVisionInput], {
    nullable: true
  })
  update?: VisionUpdateWithWhereUniqueWithoutPrevVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutPrevVisionInput], {
    nullable: true
  })
  updateMany?: VisionUpdateManyWithWhereWithoutPrevVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VisionScalarWhereInput[] | undefined;
}
