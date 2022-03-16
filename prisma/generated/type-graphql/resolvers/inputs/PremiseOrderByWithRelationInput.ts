import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesOrderByRelationAggregateInput } from "../inputs/PremisesOnTimelinesOrderByRelationAggregateInput";
import { TagsOnPremisesOrderByRelationAggregateInput } from "../inputs/TagsOnPremisesOrderByRelationAggregateInput";
import { ThreadOrderByRelationAggregateInput } from "../inputs/ThreadOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { VisionOrderByRelationAggregateInput } from "../inputs/VisionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PremiseOrderByWithRelationInput", {
  isAbstract: true
})
export class PremiseOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  author?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VisionOrderByRelationAggregateInput, {
    nullable: true
  })
  vision?: VisionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadOrderByRelationAggregateInput, {
    nullable: true
  })
  thread?: ThreadOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PremisesOnTimelinesOrderByRelationAggregateInput, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesOrderByRelationAggregateInput, {
    nullable: true
  })
  tagsOnPremises?: TagsOnPremisesOrderByRelationAggregateInput | undefined;
}
