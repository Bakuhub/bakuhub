import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnTimelineUpdateInput } from "../../../inputs/ThreadsOnTimelineUpdateInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../../../inputs/ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateThreadsOnTimelineArgs {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateInput, {
    nullable: false
  })
  data!: ThreadsOnTimelineUpdateInput;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnTimelineWhereUniqueInput;
}
