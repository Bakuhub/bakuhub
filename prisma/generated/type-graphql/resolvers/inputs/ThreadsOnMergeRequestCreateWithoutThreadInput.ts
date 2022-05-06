import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestCreateWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestCreateWithoutThreadInput {
  @TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  mergeRequest!: MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
