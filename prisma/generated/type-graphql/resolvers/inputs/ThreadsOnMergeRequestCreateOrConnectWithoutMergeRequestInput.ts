import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateWithoutMergeRequestInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnMergeRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutMergeRequestInput, {
    nullable: false
  })
  create!: ThreadsOnMergeRequestCreateWithoutMergeRequestInput;
}
