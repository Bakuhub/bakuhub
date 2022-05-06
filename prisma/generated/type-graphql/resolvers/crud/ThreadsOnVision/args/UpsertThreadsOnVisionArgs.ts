import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnVisionCreateInput } from "../../../inputs/ThreadsOnVisionCreateInput";
import { ThreadsOnVisionUpdateInput } from "../../../inputs/ThreadsOnVisionUpdateInput";
import { ThreadsOnVisionWhereUniqueInput } from "../../../inputs/ThreadsOnVisionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertThreadsOnVisionArgs {
  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnVisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnVisionCreateInput, {
    nullable: false
  })
  create!: ThreadsOnVisionCreateInput;

  @TypeGraphQL.Field(_type => ThreadsOnVisionUpdateInput, {
    nullable: false
  })
  update!: ThreadsOnVisionUpdateInput;
}
