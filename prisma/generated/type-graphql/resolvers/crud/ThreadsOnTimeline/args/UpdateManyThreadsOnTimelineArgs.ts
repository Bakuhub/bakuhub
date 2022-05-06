import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnTimelineUpdateManyMutationInput } from "../../../inputs/ThreadsOnTimelineUpdateManyMutationInput";
import { ThreadsOnTimelineWhereInput } from "../../../inputs/ThreadsOnTimelineWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyThreadsOnTimelineArgs {
  @TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyMutationInput, {
    nullable: false
  })
  data!: ThreadsOnTimelineUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput, {
    nullable: true
  })
  where?: ThreadsOnTimelineWhereInput | undefined;
}
