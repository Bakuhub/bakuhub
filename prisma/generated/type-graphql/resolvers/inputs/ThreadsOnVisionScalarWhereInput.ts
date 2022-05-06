import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ThreadsOnVisionScalarWhereInput", {
  isAbstract: true
})
export class ThreadsOnVisionScalarWhereInput {
  @TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereInput], {
    nullable: true
  })
  AND?: ThreadsOnVisionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereInput], {
    nullable: true
  })
  OR?: ThreadsOnVisionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereInput], {
    nullable: true
  })
  NOT?: ThreadsOnVisionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  threadId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  visionId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}
