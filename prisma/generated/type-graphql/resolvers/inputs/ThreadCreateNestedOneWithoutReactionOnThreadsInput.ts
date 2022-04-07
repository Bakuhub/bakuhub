import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateOrConnectWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateOrConnectWithoutReactionOnThreadsInput";
import { ThreadCreateWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateWithoutReactionOnThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateNestedOneWithoutReactionOnThreadsInput", {
  isAbstract: true
})
export class ThreadCreateNestedOneWithoutReactionOnThreadsInput {
  @TypeGraphQL.Field(_type => ThreadCreateWithoutReactionOnThreadsInput, {
    nullable: true
  })
  create?: ThreadCreateWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutReactionOnThreadsInput, {
    nullable: true
  })
  connectOrCreate?: ThreadCreateOrConnectWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: true
  })
  connect?: ThreadWhereUniqueInput | undefined;
}
