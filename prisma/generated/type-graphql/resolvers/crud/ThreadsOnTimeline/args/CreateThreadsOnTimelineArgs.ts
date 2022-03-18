import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnTimelineCreateInput } from "../../../inputs/ThreadsOnTimelineCreateInput";

@TypeGraphQL.ArgsType()
export class CreateThreadsOnTimelineArgs {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateInput, {
    nullable: false
  })
  data!: ThreadsOnTimelineCreateInput;
}
