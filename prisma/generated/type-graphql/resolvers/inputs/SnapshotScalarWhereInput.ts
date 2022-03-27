import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SnapshotScalarWhereInput", {
  isAbstract: true
})
export class SnapshotScalarWhereInput {
  @TypeGraphQL.Field(_type => [SnapshotScalarWhereInput], {
    nullable: true
  })
  AND?: SnapshotScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotScalarWhereInput], {
    nullable: true
  })
  OR?: SnapshotScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotScalarWhereInput], {
    nullable: true
  })
  NOT?: SnapshotScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

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
}
