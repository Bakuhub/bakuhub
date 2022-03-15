import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TimelineOrderByWithAggregationInput } from "../../../inputs/TimelineOrderByWithAggregationInput";
import { TimelineScalarWhereWithAggregatesInput } from "../../../inputs/TimelineScalarWhereWithAggregatesInput";
import { TimelineWhereInput } from "../../../inputs/TimelineWhereInput";
import { TimelineScalarFieldEnum } from "../../../../enums/TimelineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTimelineArgs {
  @TypeGraphQL.Field(_type => TimelineWhereInput, {
    nullable: true
  })
  where?: TimelineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TimelineOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TimelineOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TimelineScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "status" | "authorId">;

  @TypeGraphQL.Field(_type => TimelineScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TimelineScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
