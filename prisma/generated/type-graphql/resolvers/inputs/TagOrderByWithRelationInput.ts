import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesOrderByRelationAggregateInput } from "../inputs/TagsOnPremisesOrderByRelationAggregateInput";
import { TagsOnTimelinesOrderByRelationAggregateInput } from "../inputs/TagsOnTimelinesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagOrderByWithRelationInput", {
  isAbstract: true
})
export class TagOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  label?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesOrderByRelationAggregateInput, {
    nullable: true
  })
  tagsOnPremises?: TagsOnPremisesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesOrderByRelationAggregateInput, {
    nullable: true
  })
  tagsOnTimelines?: TagsOnTimelinesOrderByRelationAggregateInput | undefined;
}
