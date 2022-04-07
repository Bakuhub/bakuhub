import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput";
import { ThreadCreateWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput";
import { ThreadUpdateWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadUpdateWithoutThreadsOnMergeRequestInput";
import { ThreadUpsertWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadUpsertWithoutThreadsOnMergeRequestInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput", {
  isAbstract: true
})
export class ThreadUpdateOneRequiredWithoutThreadsOnMergeRequestInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpsertWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  upsert?: ThreadUpsertWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  update?: ThreadUpdateWithoutThreadsOnMergeRequestInput | undefined;
}
