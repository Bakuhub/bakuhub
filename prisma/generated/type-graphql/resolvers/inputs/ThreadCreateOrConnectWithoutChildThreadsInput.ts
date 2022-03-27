import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutChildThreadsInput } from "../inputs/ThreadCreateWithoutChildThreadsInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutChildThreadsInput", {
  isAbstract: true
})
export class ThreadCreateOrConnectWithoutChildThreadsInput {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutChildThreadsInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutChildThreadsInput;
}
