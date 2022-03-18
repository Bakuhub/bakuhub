import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnPremiseUpdateInput } from "../../../inputs/ThreadsOnPremiseUpdateInput";
import { ThreadsOnPremiseWhereUniqueInput } from "../../../inputs/ThreadsOnPremiseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateThreadsOnPremiseArgs {
  @TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateInput, {
    nullable: false
  })
  data!: ThreadsOnPremiseUpdateInput;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnPremiseWhereUniqueInput;
}
