import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCreateWithoutThreadInput } from "../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput";
import { ThreadsOnMergeRequestWhereUniqueInput } from "../inputs/ThreadsOnMergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput {
  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnMergeRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutThreadInput, {
    nullable: false
  })
  create!: ThreadsOnMergeRequestCreateWithoutThreadInput;
}
