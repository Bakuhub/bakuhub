import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateNestedOneWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutPremisesOnTimelinesInput";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateWithoutPremiseInput", {
  isAbstract: true
})
export class PremisesOnTimelinesCreateWithoutPremiseInput {
  @TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutPremisesOnTimelinesInput, {
    nullable: false
  })
  timeline!: TimelineCreateNestedOneWithoutPremisesOnTimelinesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
