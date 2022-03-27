import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutThreadsOnVisionInput } from "../inputs/ThreadCreateOrConnectWithoutThreadsOnVisionInput";
import { ThreadCreateWithoutThreadsOnVisionInput } from "../inputs/ThreadCreateWithoutThreadsOnVisionInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedOneWithoutThreadsOnVisionInput", {
  isAbstract: true
})
export class ThreadCreateNestedOneWithoutThreadsOnVisionInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnVisionInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutThreadsOnVisionInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnVisionInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutThreadsOnVisionInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;
}
