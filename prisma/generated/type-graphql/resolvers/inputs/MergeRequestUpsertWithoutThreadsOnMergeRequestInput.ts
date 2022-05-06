import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateWithoutThreadsOnMergeRequestInput";
import { MergeRequestUpdateWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestUpdateWithoutThreadsOnMergeRequestInput";

@TypeGraphQL.InputType("MergeRequestUpsertWithoutThreadsOnMergeRequestInput", {
  isAbstract: true
})
export class MergeRequestUpsertWithoutThreadsOnMergeRequestInput {
  @TypeGraphQL.Field(_type => MergeRequestUpdateWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  update!: MergeRequestUpdateWithoutThreadsOnMergeRequestInput;

  @TypeGraphQL.Field(_type => MergeRequestCreateWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  create!: MergeRequestCreateWithoutThreadsOnMergeRequestInput;
}
