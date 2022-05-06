import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PremiseOrderByWithAggregationInput } from "../../../inputs/PremiseOrderByWithAggregationInput";
import { PremiseScalarWhereWithAggregatesInput } from "../../../inputs/PremiseScalarWhereWithAggregatesInput";
import { PremiseWhereInput } from "../../../inputs/PremiseWhereInput";
import { PremiseScalarFieldEnum } from "../../../../enums/PremiseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPremiseArgs {
  @TypeGraphQL.Field(_type => PremiseWhereInput, {
    nullable: true
  })
  where?: PremiseWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PremiseOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PremiseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremiseScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "createdAt" | "updatedAt" | "status" | "authorId">;

  @TypeGraphQL.Field(_type => PremiseScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PremiseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
