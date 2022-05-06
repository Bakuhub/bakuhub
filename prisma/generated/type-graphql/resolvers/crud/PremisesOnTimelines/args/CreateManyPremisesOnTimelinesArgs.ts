import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremisesOnTimelinesCreateManyInput } from "../../../inputs/PremisesOnTimelinesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPremisesOnTimelinesArgs {
  @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateManyInput], {
    nullable: false
  })
  data!: PremisesOnTimelinesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
