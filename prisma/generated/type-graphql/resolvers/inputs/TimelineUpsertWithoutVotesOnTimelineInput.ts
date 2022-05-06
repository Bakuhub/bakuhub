import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutVotesOnTimelineInput } from "../inputs/TimelineCreateWithoutVotesOnTimelineInput";
import { TimelineUpdateWithoutVotesOnTimelineInput } from "../inputs/TimelineUpdateWithoutVotesOnTimelineInput";

@TypeGraphQL.InputType("TimelineUpsertWithoutVotesOnTimelineInput", {
  isAbstract: true
})
export class TimelineUpsertWithoutVotesOnTimelineInput {
  @TypeGraphQL.Field(_type => TimelineUpdateWithoutVotesOnTimelineInput, {
    nullable: false
  })
  update!: TimelineUpdateWithoutVotesOnTimelineInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutVotesOnTimelineInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutVotesOnTimelineInput;
}
