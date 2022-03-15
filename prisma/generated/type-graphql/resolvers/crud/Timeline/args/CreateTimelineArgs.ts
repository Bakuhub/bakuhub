import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimelineCreateInput } from "../../../inputs/TimelineCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTimelineArgs {
  @TypeGraphQL.Field(_type => TimelineCreateInput, {
    nullable: false
  })
  data!: TimelineCreateInput;
}
