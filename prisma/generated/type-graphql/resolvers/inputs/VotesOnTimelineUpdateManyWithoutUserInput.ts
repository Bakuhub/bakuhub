import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateManyUserInputEnvelope } from "../inputs/VotesOnTimelineCreateManyUserInputEnvelope";
import { VotesOnTimelineCreateOrConnectWithoutUserInput } from "../inputs/VotesOnTimelineCreateOrConnectWithoutUserInput";
import { VotesOnTimelineCreateWithoutUserInput } from "../inputs/VotesOnTimelineCreateWithoutUserInput";
import { VotesOnTimelineScalarWhereInput } from "../inputs/VotesOnTimelineScalarWhereInput";
import { VotesOnTimelineUpdateManyWithWhereWithoutUserInput } from "../inputs/VotesOnTimelineUpdateManyWithWhereWithoutUserInput";
import { VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput";
import { VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput } from "../inputs/VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class VotesOnTimelineUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateWithoutUserInput], {
    nullable: true
  })
  create?: VotesOnTimelineCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnTimelineCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnTimelineCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput], {
    nullable: true
  })
  set?: VotesOnTimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VotesOnTimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput], {
    nullable: true
  })
  delete?: VotesOnTimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput], {
    nullable: true
  })
  connect?: VotesOnTimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: VotesOnTimelineUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VotesOnTimelineScalarWhereInput[] | undefined;
}
