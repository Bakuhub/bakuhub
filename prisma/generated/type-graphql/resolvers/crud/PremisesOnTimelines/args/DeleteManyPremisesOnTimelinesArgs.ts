import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremisesOnTimelinesWhereInput } from "../../../inputs/PremisesOnTimelinesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPremisesOnTimelinesArgs {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput, {
    nullable: true
  })
  where?: PremisesOnTimelinesWhereInput | undefined;
}
