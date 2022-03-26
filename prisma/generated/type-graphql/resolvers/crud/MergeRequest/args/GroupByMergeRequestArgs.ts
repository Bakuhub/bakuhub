import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MergeRequestOrderByWithAggregationInput } from "../../../inputs/MergeRequestOrderByWithAggregationInput";
import { MergeRequestScalarWhereWithAggregatesInput } from "../../../inputs/MergeRequestScalarWhereWithAggregatesInput";
import { MergeRequestWhereInput } from "../../../inputs/MergeRequestWhereInput";
import { MergeRequestScalarFieldEnum } from "../../../../enums/MergeRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMergeRequestArgs {
  @TypeGraphQL.Field(_type => MergeRequestWhereInput, {
    nullable: true
  })
  where?: MergeRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MergeRequestOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MergeRequestOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MergeRequestScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "status" | "visionId">;

  @TypeGraphQL.Field(_type => MergeRequestScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MergeRequestScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
