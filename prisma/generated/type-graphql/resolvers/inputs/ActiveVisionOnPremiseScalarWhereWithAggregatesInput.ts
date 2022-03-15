import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActiveVisionOnPremiseScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ActiveVisionOnPremiseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ActiveVisionOnPremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ActiveVisionOnPremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActiveVisionOnPremiseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ActiveVisionOnPremiseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  premiseId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  visionId?: StringWithAggregatesFilter | undefined;
}
