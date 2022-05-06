import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VotesOnThreadScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class VotesOnThreadScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VotesOnThreadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VotesOnThreadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VotesOnThreadScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  threadId?: StringWithAggregatesFilter | undefined;

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
