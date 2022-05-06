import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateWithoutPremisesOnTimelinesInput";
import { TimelineUpdateWithoutPremisesOnTimelinesInput } from "../inputs/TimelineUpdateWithoutPremisesOnTimelinesInput";

@TypeGraphQL.InputType("TimelineUpsertWithoutPremisesOnTimelinesInput", {
  isAbstract: true
})
export class TimelineUpsertWithoutPremisesOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineUpdateWithoutPremisesOnTimelinesInput, {
    nullable: false
  })
  update!: TimelineUpdateWithoutPremisesOnTimelinesInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutPremisesOnTimelinesInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutPremisesOnTimelinesInput;
}
