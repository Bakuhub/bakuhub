import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SnapshotScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SnapshotScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SnapshotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SnapshotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SnapshotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SnapshotScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  versionId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  sourceUrl?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  caption?: StringWithAggregatesFilter | undefined;
}
