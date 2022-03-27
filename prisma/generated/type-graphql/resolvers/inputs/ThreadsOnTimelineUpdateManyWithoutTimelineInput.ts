import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnTimelineCreateManyTimelineInputEnvelope } from "../inputs/ThreadsOnTimelineCreateManyTimelineInputEnvelope";
import { ThreadsOnTimelineCreateOrConnectWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateOrConnectWithoutTimelineInput";
import { ThreadsOnTimelineCreateWithoutTimelineInput } from "../inputs/ThreadsOnTimelineCreateWithoutTimelineInput";
import { ThreadsOnTimelineScalarWhereInput } from "../inputs/ThreadsOnTimelineScalarWhereInput";
import { ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput";
import { ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput";
import { ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../inputs/ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnTimelineUpdateManyWithoutTimelineInput", {
  isAbstract: true
})
export class ThreadsOnTimelineUpdateManyWithoutTimelineInput {
  @TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateWithoutTimelineInput], {
    nullable: true
  })
  create?: ThreadsOnTimelineCreateWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateOrConnectWithoutTimelineInput], {
    nullable: true
  })
  connectOrCreate?: ThreadsOnTimelineCreateOrConnectWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput], {
    nullable: true
  })
  upsert?: ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateManyTimelineInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadsOnTimelineCreateManyTimelineInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput], {
    nullable: true
  })
  set?: ThreadsOnTimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ThreadsOnTimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput], {
    nullable: true
  })
  delete?: ThreadsOnTimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput], {
    nullable: true
  })
  connect?: ThreadsOnTimelineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput], {
    nullable: true
  })
  update?: ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput], {
    nullable: true
  })
  updateMany?: ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ThreadsOnTimelineScalarWhereInput[] | undefined;
}
