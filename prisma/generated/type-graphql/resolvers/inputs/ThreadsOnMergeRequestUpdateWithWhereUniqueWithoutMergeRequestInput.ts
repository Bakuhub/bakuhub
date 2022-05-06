import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestUpdateWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestUpdateWithoutMergeRequestInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnMergeRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateWithoutMergeRequestInput, {
    nullable: false
  })
  data!: ThreadsOnMergeRequestUpdateWithoutMergeRequestInput;
}
