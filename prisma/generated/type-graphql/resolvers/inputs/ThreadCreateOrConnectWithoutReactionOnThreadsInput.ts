import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateWithoutReactionOnThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutReactionOnThreadsInput", {
  isAbstract: true
})
export class ThreadCreateOrConnectWithoutReactionOnThreadsInput {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutReactionOnThreadsInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutReactionOnThreadsInput;
}
