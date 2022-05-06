import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateManyUserInputEnvelope } from "../inputs/VotesOnVisionCreateManyUserInputEnvelope";
import { VotesOnVisionCreateOrConnectWithoutUserInput } from "../inputs/VotesOnVisionCreateOrConnectWithoutUserInput";
import { VotesOnVisionCreateWithoutUserInput } from "../inputs/VotesOnVisionCreateWithoutUserInput";
import { VotesOnVisionScalarWhereInput } from "../inputs/VotesOnVisionScalarWhereInput";
import { VotesOnVisionUpdateManyWithWhereWithoutUserInput } from "../inputs/VotesOnVisionUpdateManyWithWhereWithoutUserInput";
import { VotesOnVisionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnVisionUpdateWithWhereUniqueWithoutUserInput";
import { VotesOnVisionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnVisionUpsertWithWhereUniqueWithoutUserInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class VotesOnVisionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VotesOnVisionCreateWithoutUserInput], {
    nullable: true
  })
  create?: VotesOnVisionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnVisionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: VotesOnVisionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnVisionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput], {
    nullable: true
  })
  set?: VotesOnVisionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VotesOnVisionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput], {
    nullable: true
  })
  delete?: VotesOnVisionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnVisionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: VotesOnVisionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: VotesOnVisionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VotesOnVisionScalarWhereInput[] | undefined;
}
