import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnVisionCreateInput } from "../../../inputs/ThreadsOnVisionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateThreadsOnVisionArgs {
  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateInput, {
    nullable: false
  })
  data!: ThreadsOnVisionCreateInput;
}
