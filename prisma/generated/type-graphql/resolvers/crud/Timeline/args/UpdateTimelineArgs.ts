import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimelineUpdateInput } from "../../../inputs/TimelineUpdateInput";
import { TimelineWhereUniqueInput } from "../../../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTimelineArgs {
  @TypeGraphQL.Field(_type => TimelineUpdateInput, {
    nullable: false
  })
  data!: TimelineUpdateInput;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;
}
