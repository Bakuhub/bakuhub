import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput } from "../inputs/ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput";

@TypeGraphQL.InputType("ThreadsOnMergeRequestWhereUniqueInput", {
  isAbstract: true
})
export class ThreadsOnMergeRequestWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  threadId?: string | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput, {
    nullable: true
  })
  threadId_mergeRequestId?: ThreadsOnMergeRequestThreadIdMergeRequestIdCompoundUniqueInput | undefined;
}
