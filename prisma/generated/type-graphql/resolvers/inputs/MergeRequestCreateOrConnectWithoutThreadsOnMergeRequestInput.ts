import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MergeRequestCreateWithoutThreadsOnMergeRequestInput } from "../inputs/MergeRequestCreateWithoutThreadsOnMergeRequestInput";
import { MergeRequestWhereUniqueInput } from "../inputs/MergeRequestWhereUniqueInput";

@TypeGraphQL.InputType("MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput", {
  isAbstract: true
})
export class MergeRequestCreateOrConnectWithoutThreadsOnMergeRequestInput {
  @TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: MergeRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => MergeRequestCreateWithoutThreadsOnMergeRequestInput, {
    nullable: false
  })
  create!: MergeRequestCreateWithoutThreadsOnMergeRequestInput;
}
