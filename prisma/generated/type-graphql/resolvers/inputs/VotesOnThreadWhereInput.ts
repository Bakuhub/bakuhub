import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { ThreadRelationFilter } from "../inputs/ThreadRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("VotesOnThreadWhereInput", {
  isAbstract: true
})
export class VotesOnThreadWhereInput {
  @TypeGraphQL.Field(_type => [VotesOnThreadWhereInput], {
    nullable: true
  })
  AND?: VotesOnThreadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadWhereInput], {
    nullable: true
  })
  OR?: VotesOnThreadWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadWhereInput], {
    nullable: true
  })
  NOT?: VotesOnThreadWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  vote?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
