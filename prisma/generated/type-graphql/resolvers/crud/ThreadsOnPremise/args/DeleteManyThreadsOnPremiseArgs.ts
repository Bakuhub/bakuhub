import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnPremiseWhereInput } from "../../../inputs/ThreadsOnPremiseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyThreadsOnPremiseArgs {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput, {
    nullable: true
  })
  where?: ThreadsOnPremiseWhereInput | undefined;
}
