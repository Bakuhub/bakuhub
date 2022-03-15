import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremisesOnTimelinesCreateInput } from "../../../inputs/PremisesOnTimelinesCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePremisesOnTimelinesArgs {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateInput, {
    nullable: false
  })
  data!: PremisesOnTimelinesCreateInput;
}
