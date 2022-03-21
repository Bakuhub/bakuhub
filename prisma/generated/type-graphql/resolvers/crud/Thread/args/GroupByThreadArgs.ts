import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ThreadOrderByWithAggregationInput } from "../../../inputs/ThreadOrderByWithAggregationInput";
import { ThreadScalarWhereWithAggregatesInput } from "../../../inputs/ThreadScalarWhereWithAggregatesInput";
import { ThreadWhereInput } from "../../../inputs/ThreadWhereInput";
import { ThreadScalarFieldEnum } from "../../../../enums/ThreadScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByThreadArgs {
  @TypeGraphQL.Field(_type => ThreadWhereInput, {
    nullable: true
  })
  where?: ThreadWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ThreadOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ThreadOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "activityDate" | "description" | "createdAt" | "reference" | "authorId" | "parentThreadId">;

  @TypeGraphQL.Field(_type => ThreadScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ThreadScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
