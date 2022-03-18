import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutThreadsOnTimelineInput } from "../inputs/TimelineCreateWithoutThreadsOnTimelineInput";
import { TimelineUpdateWithoutThreadsOnTimelineInput } from "../inputs/TimelineUpdateWithoutThreadsOnTimelineInput";

@TypeGraphQL.InputType("TimelineUpsertWithoutThreadsOnTimelineInput", {
  isAbstract: true
})
export class TimelineUpsertWithoutThreadsOnTimelineInput {
  @TypeGraphQL.Field(_type => TimelineUpdateWithoutThreadsOnTimelineInput, {
    nullable: false
  })
  update!: TimelineUpdateWithoutThreadsOnTimelineInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutThreadsOnTimelineInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutThreadsOnTimelineInput;
}
