import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimelineCreateInput } from "../../../inputs/TimelineCreateInput";
import { TimelineUpdateInput } from "../../../inputs/TimelineUpdateInput";
import { TimelineWhereUniqueInput } from "../../../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTimelineArgs {
  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimelineCreateInput, {
    nullable: false
  })
  create!: TimelineCreateInput;

  @TypeGraphQL.Field(_type => TimelineUpdateInput, {
    nullable: false
  })
  update!: TimelineUpdateInput;
}
