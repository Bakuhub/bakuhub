import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadUpdateInput } from "../../../inputs/ThreadUpdateInput";
import { ThreadWhereUniqueInput } from "../../../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateThreadArgs {
  @TypeGraphQL.Field(_type => ThreadUpdateInput, {
    nullable: false
  })
  data!: ThreadUpdateInput;

  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;
}
