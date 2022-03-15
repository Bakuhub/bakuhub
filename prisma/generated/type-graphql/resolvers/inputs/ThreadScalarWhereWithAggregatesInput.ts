import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ThreadScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ThreadScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ThreadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ThreadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ThreadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ThreadScalarWhereWithAggregatesInput[] | undefined;

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
  premiseId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parentThreadId?: StringNullableWithAggregatesFilter | undefined;
}
