import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagOrderByWithRelationInput } from "../inputs/TagOrderByWithRelationInput";
import { TimelineOrderByWithRelationInput } from "../inputs/TimelineOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagsOnTimelinesOrderByWithRelationInput", {
  isAbstract: true
})
export class TagsOnTimelinesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => TagOrderByWithRelationInput, {
    nullable: true
  })
  tag?: TagOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TimelineOrderByWithRelationInput, {
    nullable: true
  })
  timeline?: TimelineOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timelineId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assignedAt?: "asc" | "desc" | undefined;
}
