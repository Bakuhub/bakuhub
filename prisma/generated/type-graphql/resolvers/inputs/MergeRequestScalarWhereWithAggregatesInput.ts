import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMergeRequestStatusWithAggregatesFilter } from "../inputs/EnumMergeRequestStatusWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MergeRequestScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MergeRequestScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MergeRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MergeRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MergeRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MergeRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MergeRequestScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MergeRequestScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMergeRequestStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumMergeRequestStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  visionId?: StringWithAggregatesFilter | undefined;
}
