import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremisesOnTimelinesOrderByRelationAggregateInput } from "../inputs/PremisesOnTimelinesOrderByRelationAggregateInput";
import { ReactionOnTimelineOrderByRelationAggregateInput } from "../inputs/ReactionOnTimelineOrderByRelationAggregateInput";
import { TagsOnTimelinesOrderByRelationAggregateInput } from "../inputs/TagsOnTimelinesOrderByRelationAggregateInput";
import { ThreadsOnTimelineOrderByRelationAggregateInput } from "../inputs/ThreadsOnTimelineOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TimelineOrderByWithRelationInput", {
  isAbstract: true
})
export class TimelineOrderByWithRelationInput {
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
  description?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => PremisesOnTimelinesOrderByRelationAggregateInput, {
    nullable: true
  })
  premisesOnTimelines?: PremisesOnTimelinesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesOrderByRelationAggregateInput, {
    nullable: true
  })
  tagsOnTimelines?: TagsOnTimelinesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadsOnTimelineOrderByRelationAggregateInput, {
    nullable: true
  })
  threadsOnTimeline?: ThreadsOnTimelineOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelineOrderByRelationAggregateInput, {
    nullable: true
  })
  ReactionOnTimeline?: ReactionOnTimelineOrderByRelationAggregateInput | undefined;
}
