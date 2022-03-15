import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ThreadScalarWhereInput", {
  isAbstract: true
})
export class ThreadScalarWhereInput {
  @TypeGraphQL.Field(_type => [ThreadScalarWhereInput], {
    nullable: true
  })
  AND?: ThreadScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadScalarWhereInput], {
    nullable: true
  })
  OR?: ThreadScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadScalarWhereInput], {
    nullable: true
  })
  NOT?: ThreadScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parentThreadId?: StringNullableFilter | undefined;
}
