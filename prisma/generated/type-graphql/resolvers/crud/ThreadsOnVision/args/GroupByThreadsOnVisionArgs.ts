import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadsOnVisionOrderByWithAggregationInput } from "../../../inputs/ThreadsOnVisionOrderByWithAggregationInput";
import { ThreadsOnVisionScalarWhereWithAggregatesInput } from "../../../inputs/ThreadsOnVisionScalarWhereWithAggregatesInput";
import { ThreadsOnVisionWhereInput } from "../../../inputs/ThreadsOnVisionWhereInput";
import { ThreadsOnVisionScalarFieldEnum } from "../../../../enums/ThreadsOnVisionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByThreadsOnVisionArgs {
  @TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput, {
    nullable: true
  })
  where?: ThreadsOnVisionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ThreadsOnVisionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"threadId" | "visionId" | "assignedAt">;

  @TypeGraphQL.Field(_type => ThreadsOnVisionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ThreadsOnVisionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
