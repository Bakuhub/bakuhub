import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnPremiseUpdateManyMutationInput } from "../../../inputs/ThreadsOnPremiseUpdateManyMutationInput";
import { ThreadsOnPremiseWhereInput } from "../../../inputs/ThreadsOnPremiseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyThreadsOnPremiseArgs {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThreadsOnPremiseUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput, {
    nullable: true
  })
  where?: ThreadsOnPremiseWhereInput | undefined;
}
