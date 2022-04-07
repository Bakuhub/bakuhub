import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestScalarWhereInput } from "../inputs/ThreadsOnMergeRequestScalarWhereInput";
import { ThreadsOnMergeRequestUpdateManyMutationInput } from "../inputs/ThreadsOnMergeRequestUpdateManyMutationInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestScalarWhereInput, {
    nullable: false
  })
  where!: ThreadsOnMergeRequestScalarWhereInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThreadsOnMergeRequestUpdateManyMutationInput;
}
