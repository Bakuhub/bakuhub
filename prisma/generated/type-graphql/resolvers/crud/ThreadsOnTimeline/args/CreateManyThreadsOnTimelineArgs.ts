import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnTimelineCreateManyInput } from "../../../inputs/ThreadsOnTimelineCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyThreadsOnTimelineArgs {
  @TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateManyInput], {
    nullable: false
  })
  data!: ThreadsOnTimelineCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
