import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateWithoutReactionOnTimelinesInput";
import { TimelineUpdateWithoutReactionOnTimelinesInput } from "../inputs/TimelineUpdateWithoutReactionOnTimelinesInput";

@TypeGraphQL.InputType("TimelineUpsertWithoutReactionOnTimelinesInput", {
  isAbstract: true
})
export class TimelineUpsertWithoutReactionOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineUpdateWithoutReactionOnTimelinesInput, {
    nullable: false
  })
  update!: TimelineUpdateWithoutReactionOnTimelinesInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutReactionOnTimelinesInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutReactionOnTimelinesInput;
}
