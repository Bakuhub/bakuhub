import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremisesOnTimelinesUpdateInput } from "../../../inputs/PremisesOnTimelinesUpdateInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../../../inputs/PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePremisesOnTimelinesArgs {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateInput, {
    nullable: false
  })
  data!: PremisesOnTimelinesUpdateInput;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: PremisesOnTimelinesWhereUniqueInput;
}
