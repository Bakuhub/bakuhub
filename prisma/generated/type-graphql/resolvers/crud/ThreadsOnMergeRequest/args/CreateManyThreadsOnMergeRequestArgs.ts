import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnMergeRequestCreateManyInput } from "../../../inputs/ThreadsOnMergeRequestCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyThreadsOnMergeRequestArgs {
  @TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateManyInput], {
    nullable: false
  })
  data!: ThreadsOnMergeRequestCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
