import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateManyPremiseInputEnvelope } from "../inputs/ThreadCreateManyPremiseInputEnvelope";
import { ThreadCreateOrConnectWithoutPremiseInput } from "../inputs/ThreadCreateOrConnectWithoutPremiseInput";
import { ThreadCreateWithoutPremiseInput } from "../inputs/ThreadCreateWithoutPremiseInput";
import { ThreadScalarWhereInput } from "../inputs/ThreadScalarWhereInput";
import { ThreadUpdateManyWithWhereWithoutPremiseInput } from "../inputs/ThreadUpdateManyWithWhereWithoutPremiseInput";
import { ThreadUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/ThreadUpdateWithWhereUniqueWithoutPremiseInput";
import { ThreadUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/ThreadUpsertWithWhereUniqueWithoutPremiseInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateManyWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadUpdateManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [ThreadCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: ThreadCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadUpsertWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  upsert?: ThreadUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
    nullable: true
  })
  set?: ThreadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ThreadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
    nullable: true
  })
  delete?: ThreadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadWhereUniqueInput], {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadUpdateWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  update?: ThreadUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadUpdateManyWithWhereWithoutPremiseInput], {
    nullable: true
  })
  updateMany?: ThreadUpdateManyWithWhereWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ThreadScalarWhereInput[] | undefined;
}
