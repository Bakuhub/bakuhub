import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { PremiseListRelationFilter } from "../inputs/PremiseListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TimelineListRelationFilter } from "../inputs/TimelineListRelationFilter";
import { VisionListRelationFilter } from "../inputs/VisionListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

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
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => PremiseListRelationFilter, {
    nullable: true
  })
  premise?: PremiseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VisionListRelationFilter, {
    nullable: true
  })
  vision?: VisionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TimelineListRelationFilter, {
    nullable: true
  })
  timeline?: TimelineListRelationFilter | undefined;
}
