import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput";
import { ThreadCreateWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput", {
  isAbstract: true
})
export class ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;
}
