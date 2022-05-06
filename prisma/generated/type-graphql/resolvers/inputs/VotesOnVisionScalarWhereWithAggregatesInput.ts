import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VotesOnVisionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class VotesOnVisionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VotesOnVisionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VotesOnVisionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VotesOnVisionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  visionId?: StringWithAggregatesFilter | undefined;

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
