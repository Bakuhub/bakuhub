import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MergeRequestUpdateInput } from "../../../inputs/MergeRequestUpdateInput";
import { MergeRequestWhereUniqueInput } from "../../../inputs/MergeRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMergeRequestArgs {
  @TypeGraphQL.Field(_type => MergeRequestUpdateInput, {
    nullable: false
  })
  data!: MergeRequestUpdateInput;

  @TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: MergeRequestWhereUniqueInput;
}
