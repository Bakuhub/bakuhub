import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremisesOnTimelinesWhereUniqueInput } from "../../../inputs/PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeletePremisesOnTimelinesArgs {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: PremisesOnTimelinesWhereUniqueInput;
}
