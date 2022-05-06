import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MergeRequestWhereInput } from "../../../inputs/MergeRequestWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMergeRequestArgs {
  @TypeGraphQL.Field(_type => MergeRequestWhereInput, {
    nullable: true
  })
  where?: MergeRequestWhereInput | undefined;
}
