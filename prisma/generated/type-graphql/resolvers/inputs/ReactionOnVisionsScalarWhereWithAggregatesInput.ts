import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReactionWithAggregatesFilter } from "../inputs/EnumReactionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReactionOnVisionsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReactionOnVisionsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReactionOnVisionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReactionOnVisionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReactionOnVisionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  visionId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionWithAggregatesFilter, {
    nullable: true
  })
  reaction?: EnumReactionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
