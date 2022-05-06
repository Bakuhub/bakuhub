import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VotesOnTimelineScalarWhereInput", {
  isAbstract: true
})
export class VotesOnTimelineScalarWhereInput {
  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput], {
    nullable: true
  })
  AND?: VotesOnTimelineScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput], {
    nullable: true
  })
  OR?: VotesOnTimelineScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput], {
    nullable: true
  })
  NOT?: VotesOnTimelineScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timelineId?: StringFilter | undefined;

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
