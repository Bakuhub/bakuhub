import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActiveVisionOnPremiseOrderByWithAggregationInput } from "../../../inputs/ActiveVisionOnPremiseOrderByWithAggregationInput";
import { ActiveVisionOnPremiseScalarWhereWithAggregatesInput } from "../../../inputs/ActiveVisionOnPremiseScalarWhereWithAggregatesInput";
import { ActiveVisionOnPremiseWhereInput } from "../../../inputs/ActiveVisionOnPremiseWhereInput";
import { ActiveVisionOnPremiseScalarFieldEnum } from "../../../../enums/ActiveVisionOnPremiseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByActiveVisionOnPremiseArgs {
  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseWhereInput, {
    nullable: true
  })
  where?: ActiveVisionOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ActiveVisionOnPremiseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"premiseId" | "visionId">;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ActiveVisionOnPremiseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
