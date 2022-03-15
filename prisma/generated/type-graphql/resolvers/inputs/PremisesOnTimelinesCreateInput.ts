import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateNestedOneWithoutPremisesOnTimelinesInput } from "../inputs/PremiseCreateNestedOneWithoutPremisesOnTimelinesInput";
import { TimelineCreateNestedOneWithoutPremisesOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutPremisesOnTimelinesInput";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateInput", {
  isAbstract: true
})
export class PremisesOnTimelinesCreateInput {
  @TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutPremisesOnTimelinesInput, {
    nullable: false
  })
  timeline!: TimelineCreateNestedOneWithoutPremisesOnTimelinesInput;

  @TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutPremisesOnTimelinesInput, {
    nullable: false
  })
  premise!: PremiseCreateNestedOneWithoutPremisesOnTimelinesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
