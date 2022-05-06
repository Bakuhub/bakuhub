import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadCreateInput } from "../../../inputs/ThreadCreateInput";
import { ThreadUpdateInput } from "../../../inputs/ThreadUpdateInput";
import { ThreadWhereUniqueInput } from "../../../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertThreadArgs {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadCreateInput, {
    nullable: false
  })
  create!: ThreadCreateInput;

  @TypeGraphQL.Field(_type => ThreadUpdateInput, {
    nullable: false
  })
  update!: ThreadUpdateInput;
}
