import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremisesOnTimelinesOrderByWithAggregationInput } from "../../../inputs/PremisesOnTimelinesOrderByWithAggregationInput";
import { PremisesOnTimelinesScalarWhereWithAggregatesInput } from "../../../inputs/PremisesOnTimelinesScalarWhereWithAggregatesInput";
import { PremisesOnTimelinesWhereInput } from "../../../inputs/PremisesOnTimelinesWhereInput";
import { PremisesOnTimelinesScalarFieldEnum } from "../../../../enums/PremisesOnTimelinesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPremisesOnTimelinesArgs {
  @TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput, {
    nullable: true
  })
  where?: PremisesOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PremisesOnTimelinesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"timelineId" | "premiseId" | "assignedAt">;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PremisesOnTimelinesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
