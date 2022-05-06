import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VisionRelationFilter } from "../inputs/VisionRelationFilter";

@TypeGraphQL.InputType("VotesOnVisionWhereInput", {
  isAbstract: true
})
export class VotesOnVisionWhereInput {
  @TypeGraphQL.Field(_type => [VotesOnVisionWhereInput], {
    nullable: true
  })
  AND?: VotesOnVisionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionWhereInput], {
    nullable: true
  })
  OR?: VotesOnVisionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionWhereInput], {
    nullable: true
  })
  NOT?: VotesOnVisionWhereInput[] | undefined;

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
