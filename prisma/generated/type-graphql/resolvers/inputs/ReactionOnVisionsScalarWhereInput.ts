import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReactionFilter } from "../inputs/EnumReactionFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReactionOnVisionsScalarWhereInput", {
  isAbstract: true
})
export class ReactionOnVisionsScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput], {
    nullable: true
  })
  AND?: ReactionOnVisionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput], {
    nullable: true
  })
  OR?: ReactionOnVisionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput], {
    nullable: true
  })
  NOT?: ReactionOnVisionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

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
