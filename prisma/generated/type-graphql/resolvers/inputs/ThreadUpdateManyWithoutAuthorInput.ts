import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateManyAuthorInputEnvelope } from "../inputs/ThreadCreateManyAuthorInputEnvelope";
import { ThreadCreateOrConnectWithoutAuthorInput } from "../inputs/ThreadCreateOrConnectWithoutAuthorInput";
import { ThreadCreateWithoutAuthorInput } from "../inputs/ThreadCreateWithoutAuthorInput";
import { ThreadScalarWhereInput } from "../inputs/ThreadScalarWhereInput";
import { ThreadUpdateManyWithWhereWithoutAuthorInput } from "../inputs/ThreadUpdateManyWithWhereWithoutAuthorInput";
import { ThreadUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/ThreadUpdateWithWhereUniqueWithoutAuthorInput";
import { ThreadUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/ThreadUpsertWithWhereUniqueWithoutAuthorInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateManyWithoutAuthorInput", {
  isAbstract: true
})
export class ThreadUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [ThreadCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: ThreadCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: ThreadUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ThreadUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: ThreadUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: ThreadUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ThreadScalarWhereInput[] | undefined;
}
