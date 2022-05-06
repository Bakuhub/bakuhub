import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VisionOrderByWithAggregationInput } from "../../../inputs/VisionOrderByWithAggregationInput";
import { VisionScalarWhereWithAggregatesInput } from "../../../inputs/VisionScalarWhereWithAggregatesInput";
import { VisionWhereInput } from "../../../inputs/VisionWhereInput";
import { VisionScalarFieldEnum } from "../../../../enums/VisionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVisionArgs {
  @TypeGraphQL.Field(_type => VisionWhereInput, {
    nullable: true
  })
  where?: VisionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VisionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VisionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "activityDate" | "description" | "updatedAt" | "createdAt" | "referenceId" | "authorId" | "thumbnail" | "premiseId" | "draftMode" | "prevVisionId">;

  @TypeGraphQL.Field(_type => VisionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VisionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
