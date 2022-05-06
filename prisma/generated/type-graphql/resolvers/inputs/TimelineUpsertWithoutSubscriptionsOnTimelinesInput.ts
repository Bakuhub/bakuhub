import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput";
import { TimelineUpdateWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineUpdateWithoutSubscriptionsOnTimelinesInput";

@TypeGraphQL.InputType("TimelineUpsertWithoutSubscriptionsOnTimelinesInput", {
  isAbstract: true
})
export class TimelineUpsertWithoutSubscriptionsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineUpdateWithoutSubscriptionsOnTimelinesInput, {
    nullable: false
  })
  update!: TimelineUpdateWithoutSubscriptionsOnTimelinesInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutSubscriptionsOnTimelinesInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutSubscriptionsOnTimelinesInput;
}
