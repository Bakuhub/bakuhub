import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";

@TypeGraphQL.InputType("ReactionOnVisionsWhereInput", {
  isAbstract: true
})
export class ReactionOnVisionsWhereInput {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereInput], {
    nullable: true
  })
  AND?: ReactionOnVisionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereInput], {
    nullable: true
  })
  OR?: ReactionOnVisionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsWhereInput], {
    nullable: true
  })
  NOT?: ReactionOnVisionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => VisionRelationFilter, {
    nullable: true
  })
  vision?: VisionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  visionId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFilter, {
    nullable: true
  })
  reaction?: EnumReactionFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
