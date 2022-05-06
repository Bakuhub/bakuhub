import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionCreateManyVisionInputEnvelope } from "../inputs/VotesOnVisionCreateManyVisionInputEnvelope";
import { VotesOnVisionCreateOrConnectWithoutVisionInput } from "../inputs/VotesOnVisionCreateOrConnectWithoutVisionInput";
import { VotesOnVisionCreateWithoutVisionInput } from "../inputs/VotesOnVisionCreateWithoutVisionInput";
import { VotesOnVisionScalarWhereInput } from "../inputs/VotesOnVisionScalarWhereInput";
import { VotesOnVisionUpdateManyWithWhereWithoutVisionInput } from "../inputs/VotesOnVisionUpdateManyWithWhereWithoutVisionInput";
import { VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput } from "../inputs/VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput";
import { VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput } from "../inputs/VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput";
import { VotesOnVisionWhereUniqueInput } from "../inputs/VotesOnVisionWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionUpdateManyWithoutVisionInput", {
  isAbstract: true
})
export class VotesOnVisionUpdateManyWithoutVisionInput {
  @TypeGraphQL.Field(_type => [VotesOnVisionCreateWithoutVisionInput], {
    nullable: true
  })
  create?: VotesOnVisionCreateWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionCreateOrConnectWithoutVisionInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnVisionCreateOrConnectWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput], {
    nullable: true
  })
  upsert?: VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateManyVisionInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnVisionCreateManyVisionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput], {
    nullable: true
  })
  update?: VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionUpdateManyWithWhereWithoutVisionInput], {
    nullable: true
  })
  updateMany?: VotesOnVisionUpdateManyWithWhereWithoutVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VotesOnVisionScalarWhereInput[] | undefined;
}
