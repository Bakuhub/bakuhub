import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumPremiseStatusWithAggregatesFilter } from "../inputs/EnumPremiseStatusWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PremiseScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PremiseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPremiseStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumPremiseStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  authorId?: StringNullableWithAggregatesFilter | undefined;
}
