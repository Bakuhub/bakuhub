import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadCreateInput } from "../../../inputs/ThreadCreateInput";

@TypeGraphQL.ArgsType()
export class CreateThreadArgs {
  @TypeGraphQL.Field(_type => ThreadCreateInput, {
    nullable: false
  })
  data!: ThreadCreateInput;
}
