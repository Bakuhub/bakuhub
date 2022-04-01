import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MergeRequestRelationFilter } from "../inputs/MergeRequestRelationFilter";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { ReactionOnVisionListRelationFilter } from "../inputs/ReactionOnVisionListRelationFilter";
import { ReferenceRelationFilter } from "../inputs/ReferenceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ThreadsOnVisionListRelationFilter } from "../inputs/ThreadsOnVisionListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VisionListRelationFilter } from "../inputs/VisionListRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";

@TypeGraphQL.InputType("VisionWhereInput", {
  isAbstract: true
})
export class VisionWhereInput {
  @TypeGraphQL.Field(_type => [VisionWhereInput], {
    nullable: true
  })
  AND?: VisionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereInput], {
    nullable: true
  })
  OR?: VisionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereInput], {
    nullable: true
  })
  NOT?: VisionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  activityDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ReferenceRelationFilter, {
    nullable: true
  })
  reference?: ReferenceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  referenceId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  authorId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PremiseRelationFilter, {
    nullable: true
  })
  premise?: PremiseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  thumbnail?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  draftMode?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  prevVisionId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => VisionRelationFilter, {
    nullable: true
  })
  prevVision?: VisionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VisionListRelationFilter, {
    nullable: true
  })
  nextVisions?: VisionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnVisionListRelationFilter, {
    nullable: true
  })
  threadsOnVision?: ThreadsOnVisionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MergeRequestRelationFilter, {
    nullable: true
  })
  mergeRequest?: MergeRequestRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionListRelationFilter, {
    nullable: true
  })
  ReactionOnVision?: ReactionOnVisionListRelationFilter | undefined;
}
