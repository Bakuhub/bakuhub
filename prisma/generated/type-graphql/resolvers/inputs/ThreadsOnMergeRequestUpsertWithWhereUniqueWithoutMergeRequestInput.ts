import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput";
import { ThreadsOnMergeRequestUpdateWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpdateWithoutMergeRequestInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnMergeRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateWithoutMergeRequestInput, {
    nullable: false
  })
  update!: ThreadsOnMergeRequestUpdateWithoutMergeRequestInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutMergeRequestInput, {
    nullable: false
  })
  create!: ThreadsOnMergeRequestCreateWithoutMergeRequestInput;
}
