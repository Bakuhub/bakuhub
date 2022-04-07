import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReactionOnThreadsScalarWhereInput", {
  isAbstract: true
})
export class ReactionOnThreadsScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput], {
    nullable: true
  })
  AND?: ReactionOnThreadsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput], {
    nullable: true
  })
  OR?: ReactionOnThreadsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput], {
    nullable: true
  })
  NOT?: ReactionOnThreadsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

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
