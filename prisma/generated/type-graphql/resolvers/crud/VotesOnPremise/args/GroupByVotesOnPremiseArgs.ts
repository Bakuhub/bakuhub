import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnPremiseOrderByWithAggregationInput } from "../../../inputs/VotesOnPremiseOrderByWithAggregationInput";
import { VotesOnPremiseScalarWhereWithAggregatesInput } from "../../../inputs/VotesOnPremiseScalarWhereWithAggregatesInput";
import { VotesOnPremiseWhereInput } from "../../../inputs/VotesOnPremiseWhereInput";
import { VotesOnPremiseScalarFieldEnum } from "../../../../enums/VotesOnPremiseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVotesOnPremiseArgs {
  @TypeGraphQL.Field(_type => VotesOnPremiseWhereInput, {
    nullable: true
  })
  where?: VotesOnPremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VotesOnPremiseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "premiseId" | "vote" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => VotesOnPremiseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VotesOnPremiseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
