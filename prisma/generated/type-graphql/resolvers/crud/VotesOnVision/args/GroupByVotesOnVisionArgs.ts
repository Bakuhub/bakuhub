import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnVisionOrderByWithAggregationInput } from "../../../inputs/VotesOnVisionOrderByWithAggregationInput";
import { VotesOnVisionScalarWhereWithAggregatesInput } from "../../../inputs/VotesOnVisionScalarWhereWithAggregatesInput";
import { VotesOnVisionWhereInput } from "../../../inputs/VotesOnVisionWhereInput";
import { VotesOnVisionScalarFieldEnum } from "../../../../enums/VotesOnVisionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVotesOnVisionArgs {
  @TypeGraphQL.Field(_type => VotesOnVisionWhereInput, {
    nullable: true
  })
  where?: VotesOnVisionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VotesOnVisionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "visionId" | "vote" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => VotesOnVisionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VotesOnVisionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
