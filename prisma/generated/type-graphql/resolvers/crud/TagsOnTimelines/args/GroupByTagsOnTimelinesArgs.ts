import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagsOnTimelinesOrderByWithAggregationInput } from "../../../inputs/TagsOnTimelinesOrderByWithAggregationInput";
import { TagsOnTimelinesScalarWhereWithAggregatesInput } from "../../../inputs/TagsOnTimelinesScalarWhereWithAggregatesInput";
import { TagsOnTimelinesWhereInput } from "../../../inputs/TagsOnTimelinesWhereInput";
import { TagsOnTimelinesScalarFieldEnum } from "../../../../enums/TagsOnTimelinesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTagsOnTimelinesArgs {
  @TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput, {
    nullable: true
  })
  where?: TagsOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TagsOnTimelinesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"tagId" | "timelineId" | "assignedAt">;

  @TypeGraphQL.Field(_type => TagsOnTimelinesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TagsOnTimelinesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
