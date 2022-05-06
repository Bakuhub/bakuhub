import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VotesOnThreadScalarWhereInput", {
  isAbstract: true
})
export class VotesOnThreadScalarWhereInput {
  @TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput], {
    nullable: true
  })
  AND?: VotesOnThreadScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput], {
    nullable: true
  })
  OR?: VotesOnThreadScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput], {
    nullable: true
  })
  NOT?: VotesOnThreadScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

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
