import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput";
import { ThreadWhereUniqueInput } from "../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.InputType("ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput", {
  isAbstract: true
})
export class ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutThreadsOnMergeRequestInput;
}
