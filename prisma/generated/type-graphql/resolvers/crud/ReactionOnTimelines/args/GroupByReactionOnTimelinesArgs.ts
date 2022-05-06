import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReactionOnTimelinesOrderByWithAggregationInput } from "../../../inputs/ReactionOnTimelinesOrderByWithAggregationInput";
import { ReactionOnTimelinesScalarWhereWithAggregatesInput } from "../../../inputs/ReactionOnTimelinesScalarWhereWithAggregatesInput";
import { ReactionOnTimelinesWhereInput } from "../../../inputs/ReactionOnTimelinesWhereInput";
import { ReactionOnTimelinesScalarFieldEnum } from "../../../../enums/ReactionOnTimelinesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReactionOnTimelinesArgs {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput, {
    nullable: true
  })
  where?: ReactionOnTimelinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReactionOnTimelinesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "timelineId" | "reaction" | "createdAt">;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReactionOnTimelinesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
