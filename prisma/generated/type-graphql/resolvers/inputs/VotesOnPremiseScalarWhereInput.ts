import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VotesOnPremiseScalarWhereInput", {
  isAbstract: true
})
export class VotesOnPremiseScalarWhereInput {
  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput], {
    nullable: true
  })
  AND?: VotesOnPremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput], {
    nullable: true
  })
  OR?: VotesOnPremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput], {
    nullable: true
  })
  NOT?: VotesOnPremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

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
