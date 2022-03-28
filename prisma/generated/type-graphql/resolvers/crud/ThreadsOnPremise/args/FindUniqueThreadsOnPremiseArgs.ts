import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnPremiseWhereUniqueInput } from "../../../inputs/ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueThreadsOnPremiseArgs {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnPremiseWhereUniqueInput;
}