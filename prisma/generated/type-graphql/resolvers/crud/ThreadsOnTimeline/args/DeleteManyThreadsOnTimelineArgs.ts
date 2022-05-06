import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnTimelineWhereInput } from "../../../inputs/ThreadsOnTimelineWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyThreadsOnTimelineArgs {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput, {
    nullable: true
  })
  where?: ThreadsOnTimelineWhereInput | undefined;
}
