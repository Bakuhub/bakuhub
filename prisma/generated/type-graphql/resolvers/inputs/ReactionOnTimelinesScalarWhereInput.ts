import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReactionOnTimelinesScalarWhereInput", {
  isAbstract: true
})
export class ReactionOnTimelinesScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput], {
    nullable: true
  })
  AND?: ReactionOnTimelinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput], {
    nullable: true
  })
  OR?: ReactionOnTimelinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput], {
    nullable: true
  })
  NOT?: ReactionOnTimelinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timelineId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFilter, {
    nullable: true
  })
  reaction?: EnumReactionFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
