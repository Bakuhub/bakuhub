import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReferenceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReferenceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReferenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReferenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReferenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReferenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;
}
