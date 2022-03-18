import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnTimelineCreateInput } from "../../../inputs/ThreadsOnTimelineCreateInput";
import { ThreadsOnTimelineUpdateInput } from "../../../inputs/ThreadsOnTimelineUpdateInput";
import { ThreadsOnTimelineWhereUniqueInput } from "../../../inputs/ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertThreadsOnTimelineArgs {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnTimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineCreateInput, {
    nullable: false
  })
  create!: ThreadsOnTimelineCreateInput;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateInput, {
    nullable: false
  })
  update!: ThreadsOnTimelineUpdateInput;
}
