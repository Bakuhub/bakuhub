import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumPremiseStatusFilter } from "../inputs/EnumPremiseStatusFilter";
import { PremisesOnTimelinesListRelationFilter } from "../inputs/PremisesOnTimelinesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TagsOnPremisesListRelationFilter } from "../inputs/TagsOnPremisesListRelationFilter";
import { ThreadsOnPremiseListRelationFilter } from "../inputs/ThreadsOnPremiseListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VisionListRelationFilter } from "../inputs/VisionListRelationFilter";

@TypeGraphQL.InputType("PremiseWhereInput", {
  isAbstract: true
})
export class PremiseWhereInput {
  @TypeGraphQL.Field(_type => [PremiseWhereInput], {
    nullable: true
  })
  AND?: PremiseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremiseWhereInput], {
    nullable: true
  })
  OR?: PremiseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremiseWhereInput], {
    nullable: true
  })
  NOT?: PremiseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPremiseStatusFilter, {
    nullable: true
  })
  status?: EnumPremiseStatusFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  authorId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => VisionListRelationFilter, {
    nullable: true
  })
  vision?: VisionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesListRelationFilter, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesListRelationFilter, {
    nullable: true
  })
  tagsOnPremises?: TagsOnPremisesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnPremiseListRelationFilter, {
    nullable: true
  })
  threadsOnPremise?: ThreadsOnPremiseListRelationFilter | undefined;
}
