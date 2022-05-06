import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateManyParentThreadInputEnvelope } from "../inputs/ThreadCreateManyParentThreadInputEnvelope";
import { ThreadCreateOrConnectWithoutParentThreadInput } from "../inputs/ThreadCreateOrConnectWithoutParentThreadInput";
import { ThreadCreateWithoutParentThreadInput } from "../inputs/ThreadCreateWithoutParentThreadInput";
import { ThreadScalarWhereInput } from "../inputs/ThreadScalarWhereInput";
import { ThreadUpdateManyWithWhereWithoutParentThreadInput } from "../inputs/ThreadUpdateManyWithWhereWithoutParentThreadInput";
import { ThreadUpdateWithWhereUniqueWithoutParentThreadInput } from "../inputs/ThreadUpdateWithWhereUniqueWithoutParentThreadInput";
import { ThreadUpsertWithWhereUniqueWithoutParentThreadInput } from "../inputs/ThreadUpsertWithWhereUniqueWithoutParentThreadInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateManyWithoutParentThreadInput", {
  isAbstract: true
})
export class ThreadUpdateManyWithoutParentThreadInput {
  @TypeGraphQL.Field(_type => [ThreadCreateWithoutParentThreadInput], {
    nullable: true
  })
  create?: ThreadCreateWithoutParentThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutParentThreadInput], {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutParentThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadUpsertWithWhereUniqueWithoutParentThreadInput], {
    nullable: true
  })
  upsert?: ThreadUpsertWithWhereUniqueWithoutParentThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateManyParentThreadInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadCreateManyParentThreadInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ThreadUpdateWithWhereUniqueWithoutParentThreadInput], {
    nullable: true
  })
  update?: ThreadUpdateWithWhereUniqueWithoutParentThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadUpdateManyWithWhereWithoutParentThreadInput], {
    nullable: true
  })
  updateMany?: ThreadUpdateManyWithWhereWithoutParentThreadInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ThreadScalarWhereInput[] | undefined;
}
