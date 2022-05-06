import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MergeRequestCreateInput } from "../../../inputs/MergeRequestCreateInput";
import { MergeRequestUpdateInput } from "../../../inputs/MergeRequestUpdateInput";
import { MergeRequestWhereUniqueInput } from "../../../inputs/MergeRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMergeRequestArgs {
  @TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: MergeRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => MergeRequestCreateInput, {
    nullable: false
  })
  create!: MergeRequestCreateInput;

  @TypeGraphQL.Field(_type => MergeRequestUpdateInput, {
    nullable: false
  })
  update!: MergeRequestUpdateInput;
}
