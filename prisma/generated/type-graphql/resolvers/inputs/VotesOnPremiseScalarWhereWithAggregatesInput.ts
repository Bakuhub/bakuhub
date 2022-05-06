import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VotesOnPremiseScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class VotesOnPremiseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VotesOnPremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VotesOnPremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VotesOnPremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  premiseId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  vote?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
