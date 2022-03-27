import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumMergeRequestStatusFilter } from "../inputs/EnumMergeRequestStatusFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";

@TypeGraphQL.InputType("MergeRequestWhereInput", {
  isAbstract: true
})
export class MergeRequestWhereInput {
  @TypeGraphQL.Field(_type => [MergeRequestWhereInput], {
    nullable: true
  })
  AND?: MergeRequestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MergeRequestWhereInput], {
    nullable: true
  })
  OR?: MergeRequestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MergeRequestWhereInput], {
    nullable: true
  })
  NOT?: MergeRequestWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMergeRequestStatusFilter, {
    nullable: true
  })
  status?: EnumMergeRequestStatusFilter | undefined;

  @TypeGraphQL.Field(_type => VisionRelationFilter, {
    nullable: true
  })
  vision?: VisionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  visionId?: StringFilter | undefined;
}
