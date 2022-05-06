import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesCreateWithoutTimelineInput } from "../inputs/PremisesOnTimelinesCreateWithoutTimelineInput";
import { PremisesOnTimelinesUpdateWithoutTimelineInput } from "../inputs/PremisesOnTimelinesUpdateWithoutTimelineInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../inputs/PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class PremisesOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: PremisesOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateWithoutTimelineInput, {
    nullable: false
  })
  update!: PremisesOnTimelinesUpdateWithoutTimelineInput;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: PremisesOnTimelinesCreateWithoutTimelineInput;
}
