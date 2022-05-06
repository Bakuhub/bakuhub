import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput";
import { ThreadUpdateWithoutThreadsOnMergeRequestInput } from "../inputs/ThreadUpdateWithoutThreadsOnMergeRequestInput";

@TypeGraphQL.InputType("ThreadUpsertWithoutThreadsOnMergeRequestInput", {
  isAbstract: true
})
export class ThreadUpsertWithoutThreadsOnMergeRequestInput {
  @TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  update!: ThreadUpdateWithoutThreadsOnMergeRequestInput;

  @TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  create!: ThreadCreateWithoutThreadsOnMergeRequestInput;
}
