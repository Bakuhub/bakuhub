import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnPremiseCreateInput } from "../../../inputs/ThreadsOnPremiseCreateInput";
import { ThreadsOnPremiseUpdateInput } from "../../../inputs/ThreadsOnPremiseUpdateInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../../../inputs/ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertThreadsOnPremiseArgs {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnPremiseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateInput, {
    nullable: false
  })
  create!: ThreadsOnPremiseCreateInput;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateInput, {
    nullable: false
  })
  update!: ThreadsOnPremiseUpdateInput;
}
