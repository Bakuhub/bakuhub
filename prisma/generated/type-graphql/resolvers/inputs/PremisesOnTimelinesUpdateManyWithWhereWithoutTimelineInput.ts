import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesScalarWhereInput } from "../inputs/PremisesOnTimelinesScalarWhereInput";
import { PremisesOnTimelinesUpdateManyMutationInput } from "../inputs/PremisesOnTimelinesUpdateManyMutationInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput", {
  isAbstract: true
})
export class PremisesOnTimelinesUpdateManyWithWhereWithoutTimelineInput {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesScalarWhereInput, {
    nullable: false
  })
  where!: PremisesOnTimelinesScalarWhereInput;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PremisesOnTimelinesUpdateManyMutationInput;
}