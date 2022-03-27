import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TagsOnPremisesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TagsOnPremisesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TagsOnPremisesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TagsOnPremisesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TagsOnPremisesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  tagId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  premiseId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
