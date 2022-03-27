import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TagsOnPremisesScalarWhereInput", {
  isAbstract: true
})
export class TagsOnPremisesScalarWhereInput {
  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput], {
    nullable: true
  })
  AND?: TagsOnPremisesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput], {
    nullable: true
  })
  OR?: TagsOnPremisesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput], {
    nullable: true
  })
  NOT?: TagsOnPremisesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tagId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}
