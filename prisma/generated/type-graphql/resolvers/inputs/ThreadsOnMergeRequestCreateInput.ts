import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput";
import { ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestCreateInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestCreateInput {
  @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  thread!: ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput;

  @TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  mergeRequest!: MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
