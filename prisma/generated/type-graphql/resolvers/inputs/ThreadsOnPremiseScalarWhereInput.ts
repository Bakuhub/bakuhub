import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ThreadsOnPremiseScalarWhereInput", {
  isAbstract: true
})
export class ThreadsOnPremiseScalarWhereInput {
  @TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereInput], {
    nullable: true
  })
  AND?: ThreadsOnPremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereInput], {
    nullable: true
  })
  OR?: ThreadsOnPremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereInput], {
    nullable: true
  })
  NOT?: ThreadsOnPremiseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  threadId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}
