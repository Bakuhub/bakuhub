import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremisesOnTimelinesOrderByWithRelationInput } from "../../../inputs/PremisesOnTimelinesOrderByWithRelationInput";
import { PremisesOnTimelinesWhereInput } from "../../../inputs/PremisesOnTimelinesWhereInput";
import { PremisesOnTimelinesWhereUniqueInput } from "../../../inputs/PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePremisesOnTimelinesArgs {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput, {
    nullable: true
  })
  where?: PremisesOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PremisesOnTimelinesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PremisesOnTimelinesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}