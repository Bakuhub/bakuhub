import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnPremisesOrderByWithAggregationInput } from "../../../inputs/TagsOnPremisesOrderByWithAggregationInput";
import { TagsOnPremisesScalarWhereWithAggregatesInput } from "../../../inputs/TagsOnPremisesScalarWhereWithAggregatesInput";
import { TagsOnPremisesWhereInput } from "../../../inputs/TagsOnPremisesWhereInput";
import { TagsOnPremisesScalarFieldEnum } from "../../../../enums/TagsOnPremisesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTagsOnPremisesArgs {
  @TypeGraphQL.Field(_type => TagsOnPremisesWhereInput, {
    nullable: true
  })
  where?: TagsOnPremisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TagsOnPremisesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"tagId" | "premiseId" | "assignedAt">;

  @TypeGraphQL.Field(_type => TagsOnPremisesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TagsOnPremisesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
