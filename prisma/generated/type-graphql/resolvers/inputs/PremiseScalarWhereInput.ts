import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPremiseStatusFilter } from "../inputs/EnumPremiseStatusFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PremiseScalarWhereInput", {
  isAbstract: true
})
export class PremiseScalarWhereInput {
  @TypeGraphQL.Field(_type => [PremiseScalarWhereInput], {
    nullable: true
  })
  AND?: PremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremiseScalarWhereInput], {
    nullable: true
  })
  OR?: PremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremiseScalarWhereInput], {
    nullable: true
  })
  NOT?: PremiseScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPremiseStatusFilter, {
    nullable: true
  })
  status?: EnumPremiseStatusFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter | undefined;
}
