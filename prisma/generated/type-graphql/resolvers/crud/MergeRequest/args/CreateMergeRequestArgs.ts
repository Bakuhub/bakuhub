import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MergeRequestCreateInput } from "../../../inputs/MergeRequestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMergeRequestArgs {
  @TypeGraphQL.Field(_type => MergeRequestCreateInput, {
    nullable: false
  })
  data!: MergeRequestCreateInput;
}
