import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineCreateManyTimelineInputEnvelope } from "../inputs/VotesOnTimelineCreateManyTimelineInputEnvelope";
import { VotesOnTimelineCreateOrConnectWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateOrConnectWithoutTimelineInput";
import { VotesOnTimelineCreateWithoutTimelineInput } from "../inputs/VotesOnTimelineCreateWithoutTimelineInput";
import { VotesOnTimelineScalarWhereInput } from "../inputs/VotesOnTimelineScalarWhereInput";
import { VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput";
import { VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput";
import { VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput";
import { VotesOnTimelineWhereUniqueInput } from "../inputs/VotesOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnTimelineUpdateManyWithoutTimelineInput", {
  isAbstract: true
})
export class VotesOnTimelineUpdateManyWithoutTimelineInput {
  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateWithoutTimelineInput], {
    nullable: true
  })
  create?: VotesOnTimelineCreateWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineCreateOrConnectWithoutTimelineInput], {
    nullable: true
  })
  connectOrCreate?: VotesOnTimelineCreateOrConnectWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput], {
    nullable: true
  })
  upsert?: VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateManyTimelineInputEnvelope, {
    nullable: true
  })
  createMany?: VotesOnTimelineCreateManyTimelineInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput], {
    nullable: true
  })
  update?: VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput], {
    nullable: true
  })
  updateMany?: VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VotesOnTimelineScalarWhereInput[] | undefined;
}
