import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VotesOnTimelineScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class VotesOnTimelineScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VotesOnTimelineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VotesOnTimelineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VotesOnTimelineScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  timelineId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  vote?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
