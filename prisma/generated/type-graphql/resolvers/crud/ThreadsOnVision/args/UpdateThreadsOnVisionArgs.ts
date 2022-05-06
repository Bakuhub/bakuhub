import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnVisionUpdateInput } from "../../../inputs/ThreadsOnVisionUpdateInput";
import { ThreadsOnVisionWhereUniqueInput } from "../../../inputs/ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateThreadsOnVisionArgs {
  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateInput, {
    nullable: false
  })
  data!: ThreadsOnVisionUpdateInput;

  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnVisionWhereUniqueInput;
}
