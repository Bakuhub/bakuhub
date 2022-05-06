import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnTimelineWhereUniqueInput } from "../../../inputs/ThreadsOnTimelineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueThreadsOnTimelineArgs {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput, {
    nullable: false
  })
  where!: ThreadsOnTimelineWhereUniqueInput;
}
