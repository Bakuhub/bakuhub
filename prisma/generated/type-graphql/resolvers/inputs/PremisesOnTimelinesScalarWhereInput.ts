import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PremisesOnTimelinesScalarWhereInput", {
  isAbstract: true
})
export class PremisesOnTimelinesScalarWhereInput {
  @TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput], {
    nullable: true
  })
  AND?: PremisesOnTimelinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput], {
    nullable: true
  })
  OR?: PremisesOnTimelinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarWhereInput], {
    nullable: true
  })
  NOT?: PremisesOnTimelinesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  timelineId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  premiseId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  assignedAt?: DateTimeFilter | undefined;
}
