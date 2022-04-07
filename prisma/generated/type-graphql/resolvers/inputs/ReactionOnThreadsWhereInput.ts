import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ReactionOnThreadsWhereInput", {
  isAbstract: true
})
export class ReactionOnThreadsWhereInput {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsWhereInput], {
    nullable: true
  })
  AND?: ReactionOnThreadsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsWhereInput], {
    nullable: true
  })
  OR?: ReactionOnThreadsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsWhereInput], {
    nullable: true
  })
  NOT?: ReactionOnThreadsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ThreadRelationFilter, {
    nullable: true
  })
  thread?: ThreadRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  threadId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReactionFilter, {
    nullable: true
  })
  reaction?: EnumReactionFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
