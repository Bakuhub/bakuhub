import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VotesOnThreadOrderByWithAggregationInput } from "../../../inputs/VotesOnThreadOrderByWithAggregationInput";
import { VotesOnThreadScalarWhereWithAggregatesInput } from "../../../inputs/VotesOnThreadScalarWhereWithAggregatesInput";
import { VotesOnThreadWhereInput } from "../../../inputs/VotesOnThreadWhereInput";
import { VotesOnThreadScalarFieldEnum } from "../../../../enums/VotesOnThreadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVotesOnThreadArgs {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereInput, {
    nullable: true
  })
  where?: VotesOnThreadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VotesOnThreadOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "threadId" | "vote" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => VotesOnThreadScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VotesOnThreadScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
