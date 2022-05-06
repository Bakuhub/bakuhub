import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VotesOnVisionScalarWhereInput", {
  isAbstract: true
})
export class VotesOnVisionScalarWhereInput {
  @TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput], {
    nullable: true
  })
  AND?: VotesOnVisionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput], {
    nullable: true
  })
  OR?: VotesOnVisionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput], {
    nullable: true
  })
  NOT?: VotesOnVisionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

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
