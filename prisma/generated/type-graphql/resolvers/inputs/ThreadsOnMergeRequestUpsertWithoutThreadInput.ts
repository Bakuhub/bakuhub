import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput";
import { ThreadsOnMergeRequestUpdateWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestUpdateWithoutThreadInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestUpsertWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestUpsertWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateWithoutThreadInput, {
    nullable: false
  })
  update!: ThreadsOnMergeRequestUpdateWithoutThreadInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutThreadInput, {
    nullable: false
  })
  create!: ThreadsOnMergeRequestCreateWithoutThreadInput;
}
