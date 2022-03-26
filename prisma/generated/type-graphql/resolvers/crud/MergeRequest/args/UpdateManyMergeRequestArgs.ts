import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MergeRequestUpdateManyMutationInput } from "../../../inputs/MergeRequestUpdateManyMutationInput";
import { MergeRequestWhereInput } from "../../../inputs/MergeRequestWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMergeRequestArgs {
  @TypeGraphQL.Field(_type => MergeRequestUpdateManyMutationInput, {
    nullable: false
  })
  data!: MergeRequestUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MergeRequestWhereInput, {
    nullable: true
  })
  where?: MergeRequestWhereInput | undefined;
}
