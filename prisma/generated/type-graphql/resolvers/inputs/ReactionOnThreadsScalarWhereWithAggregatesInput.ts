import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReactionWithAggregatesFilter } from "../inputs/EnumReactionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReactionOnThreadsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReactionOnThreadsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReactionOnThreadsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReactionOnThreadsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReactionOnThreadsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  threadId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionWithAggregatesFilter, {
    nullable: true
  })
  reaction?: EnumReactionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
