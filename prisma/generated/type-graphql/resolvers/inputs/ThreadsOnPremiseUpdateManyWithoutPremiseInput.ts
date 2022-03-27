import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnPremiseCreateManyPremiseInputEnvelope } from "../inputs/ThreadsOnPremiseCreateManyPremiseInputEnvelope";
import { ThreadsOnPremiseCreateOrConnectWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateOrConnectWithoutPremiseInput";
import { ThreadsOnPremiseCreateWithoutPremiseInput } from "../inputs/ThreadsOnPremiseCreateWithoutPremiseInput";
import { ThreadsOnPremiseScalarWhereInput } from "../inputs/ThreadsOnPremiseScalarWhereInput";
import { ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput";
import { ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput";
import { ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../inputs/ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnPremiseUpdateManyWithoutPremiseInput", {
  isAbstract: true
})
export class ThreadsOnPremiseUpdateManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: ThreadsOnPremiseCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: ThreadsOnPremiseCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  upsert?: ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadsOnPremiseCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput], {
    nullable: true
  })
  set?: ThreadsOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ThreadsOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput], {
    nullable: true
  })
  delete?: ThreadsOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput], {
    nullable: true
  })
  connect?: ThreadsOnPremiseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  update?: ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput], {
    nullable: true
  })
  updateMany?: ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ThreadsOnPremiseScalarWhereInput[] | undefined;
}
