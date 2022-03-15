import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadWhereUniqueInput } from "../../../inputs/ThreadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteThreadArgs {
  @TypeGraphQL.Field(_type => ThreadWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadWhereUniqueInput;
}
