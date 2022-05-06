import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestCreateWithoutMergeRequestInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestCreateWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  thread!: ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
