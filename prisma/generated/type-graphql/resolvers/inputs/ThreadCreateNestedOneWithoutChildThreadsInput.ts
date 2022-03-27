import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutChildThreadsInput } from "../inputs/ThreadCreateOrConnectWithoutChildThreadsInput";
import { ThreadCreateWithoutChildThreadsInput } from "../inputs/ThreadCreateWithoutChildThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedOneWithoutChildThreadsInput", {
  isAbstract: true
})
export class ThreadCreateNestedOneWithoutChildThreadsInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutChildThreadsInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutChildThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutChildThreadsInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutChildThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;
}
