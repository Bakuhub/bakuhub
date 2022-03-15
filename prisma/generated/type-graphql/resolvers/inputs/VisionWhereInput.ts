import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActiveVisionOnPremiseListRelationFilter } from "../inputs/ActiveVisionOnPremiseListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  activityDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  reference?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PremiseRelationFilter, {
    nullable: true
  })
  premise?: PremiseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ActiveVisionOnPremiseListRelationFilter, {
    nullable: true
  })
  activeVisionOnPremise?: ActiveVisionOnPremiseListRelationFilter | undefined;
}
