import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReactionWithAggregatesFilter } from "../inputs/EnumReactionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReactionOnTimelinesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReactionOnTimelinesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReactionOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReactionOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReactionOnTimelinesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  timelineId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionWithAggregatesFilter, {
    nullable: true
  })
  reaction?: EnumReactionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
