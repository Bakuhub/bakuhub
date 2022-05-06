import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimelineUpdateManyMutationInput } from "../../../inputs/TimelineUpdateManyMutationInput";
import { TimelineWhereInput } from "../../../inputs/TimelineWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTimelineArgs {
  @TypeGraphQL.Field(_type => TimelineUpdateManyMutationInput, {
    nullable: false
  })
  data!: TimelineUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TimelineWhereInput, {
    nullable: true
  })
  where?: TimelineWhereInput | undefined;
}
