import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MergeRequestWhereUniqueInput } from "../../../inputs/MergeRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMergeRequestArgs {
  @TypeGraphQL.Field(_type => MergeRequestWhereUniqueInput, {
    nullable: false
  })
  where!: MergeRequestWhereUniqueInput;
}
