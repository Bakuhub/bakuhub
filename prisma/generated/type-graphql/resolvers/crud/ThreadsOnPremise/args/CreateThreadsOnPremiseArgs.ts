import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnPremiseCreateInput } from "../../../inputs/ThreadsOnPremiseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateThreadsOnPremiseArgs {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseCreateInput, {
    nullable: false
  })
  data!: ThreadsOnPremiseCreateInput;
}
