import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnVisionCreateManyInput } from "../../../inputs/ThreadsOnVisionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyThreadsOnVisionArgs {
  @TypeGraphQL.Field(_type => [ThreadsOnVisionCreateManyInput], {
    nullable: false
  })
  data!: ThreadsOnVisionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
