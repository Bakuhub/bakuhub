import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremisesOnTimelinesCreateInput } from "../../../inputs/PremisesOnTimelinesCreateInput";
import { PremisesOnTimelinesUpdateInput } from "../../../inputs/PremisesOnTimelinesUpdateInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../../../inputs/PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPremisesOnTimelinesArgs {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: PremisesOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateInput, {
    nullable: false
  })
  create!: PremisesOnTimelinesCreateInput;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateInput, {
    nullable: false
  })
  update!: PremisesOnTimelinesUpdateInput;
}
