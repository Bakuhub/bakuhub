import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ReferenceListRelationFilter } from "../inputs/ReferenceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SnapshotWhereInput", {
  isAbstract: true
})
export class SnapshotWhereInput {
  @TypeGraphQL.Field(_type => [SnapshotWhereInput], {
    nullable: true
  })
  AND?: SnapshotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotWhereInput], {
    nullable: true
  })
  OR?: SnapshotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotWhereInput], {
    nullable: true
  })
  NOT?: SnapshotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  versionId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  s3Url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sourceUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  caption?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ReferenceListRelationFilter, {
    nullable: true
  })
  references?: ReferenceListRelationFilter | undefined;
}
