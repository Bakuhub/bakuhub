import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ThreadsOnPremiseScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ThreadsOnPremiseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ThreadsOnPremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ThreadsOnPremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ThreadsOnPremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  threadId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  premiseId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  assignedAt?: DateTimeWithAggregatesFilter | undefined;
}
