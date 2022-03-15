import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremisesOnTimelinesUpdateManyMutationInput } from "../../../inputs/PremisesOnTimelinesUpdateManyMutationInput";
import { PremisesOnTimelinesWhereInput } from "../../../inputs/PremisesOnTimelinesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPremisesOnTimelinesArgs {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PremisesOnTimelinesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput, {
    nullable: true
  })
  where?: PremisesOnTimelinesWhereInput | undefined;
}
