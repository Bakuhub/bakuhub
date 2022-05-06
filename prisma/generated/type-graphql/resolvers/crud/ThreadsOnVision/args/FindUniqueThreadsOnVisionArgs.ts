import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnVisionWhereUniqueInput } from "../../../inputs/ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueThreadsOnVisionArgs {
  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnVisionWhereUniqueInput;
}
