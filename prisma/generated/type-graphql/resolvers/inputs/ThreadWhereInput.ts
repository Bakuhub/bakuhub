import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PremiseRelationFilter } from "../inputs/PremiseRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { ThreadListRelationFilter } from "../inputs/ThreadListRelationFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";

@TypeGraphQL.InputType("ThreadWhereInput", {
  isAbstract: true
})
export class ThreadWhereInput {
  @TypeGraphQL.Field(_type => [ThreadWhereInput], {
    nullable: true
  })
  AND?: ThreadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadWhereInput], {
    nullable: true
  })
  OR?: ThreadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadWhereInput], {
    nullable: true
  })
  NOT?: ThreadWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => PremiseRelationFilter, {
    nullable: true
  })
  premise?: PremiseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parentThreadId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ThreadRelationFilter, {
    nullable: true
  })
  parentThread?: ThreadRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ThreadListRelationFilter, {
    nullable: true
  })
  childThreads?: ThreadListRelationFilter | undefined;
}
