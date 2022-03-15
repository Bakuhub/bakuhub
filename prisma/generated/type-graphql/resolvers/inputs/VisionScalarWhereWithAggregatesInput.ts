import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VisionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class VisionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VisionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VisionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VisionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VisionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  activityDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  reference?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  authorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  premiseId?: StringWithAggregatesFilter | undefined;
}
