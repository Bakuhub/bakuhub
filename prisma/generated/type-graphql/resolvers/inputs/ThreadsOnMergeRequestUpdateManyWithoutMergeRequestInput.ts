import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope } from "../inputs/ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope";
import { ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput";
import { ThreadsOnMergeRequestCreateWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput";
import { ThreadsOnMergeRequestScalarWhereInput } from "../inputs/ThreadsOnMergeRequestScalarWhereInput";
import { ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput";
import { ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput";
import { ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateWithoutMergeRequestInput], {
    nullable: true
  })
  create?: ThreadsOnMergeRequestCreateWithoutMergeRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput], {
    nullable: true
  })
  connectOrCreate?: ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput], {
    nullable: true
  })
  upsert?: ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope, {
    nullable: true
  })
  createMany?: ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput], {
    nullable: true
  })
  set?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput], {
    nullable: true
  })
  delete?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput], {
    nullable: true
  })
  connect?: ThreadsOnMergeRequestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput], {
    nullable: true
  })
  update?: ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput], {
    nullable: true
  })
  updateMany?: ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ThreadsOnMergeRequestScalarWhereInput[] | undefined;
}
