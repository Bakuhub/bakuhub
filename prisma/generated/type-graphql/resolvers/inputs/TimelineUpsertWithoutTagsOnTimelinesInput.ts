import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutTagsOnTimelinesInput } from "../inputs/TimelineCreateWithoutTagsOnTimelinesInput";
import { TimelineUpdateWithoutTagsOnTimelinesInput } from "../inputs/TimelineUpdateWithoutTagsOnTimelinesInput";

@TypeGraphQL.InputType("TimelineUpsertWithoutTagsOnTimelinesInput", {
  isAbstract: true
})
export class TimelineUpsertWithoutTagsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineUpdateWithoutTagsOnTimelinesInput, {
    nullable: false
  })
  update!: TimelineUpdateWithoutTagsOnTimelinesInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutTagsOnTimelinesInput;
}
