import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnVisionWhereInput } from "../../../inputs/ThreadsOnVisionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyThreadsOnVisionArgs {
  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput, {
    nullable: true
  })
  where?: ThreadsOnVisionWhereInput | undefined;
}
