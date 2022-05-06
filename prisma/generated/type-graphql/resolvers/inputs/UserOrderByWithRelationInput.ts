import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { PremiseOrderByRelationAggregateInput } from "../inputs/PremiseOrderByRelationAggregateInput";
import { ReactionOnThreadsOrderByRelationAggregateInput } from "../inputs/ReactionOnThreadsOrderByRelationAggregateInput";
import { ReactionOnTimelinesOrderByRelationAggregateInput } from "../inputs/ReactionOnTimelinesOrderByRelationAggregateInput";
import { ReactionOnVisionsOrderByRelationAggregateInput } from "../inputs/ReactionOnVisionsOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { SubscriptionsOnPremisesOrderByRelationAggregateInput } from "../inputs/SubscriptionsOnPremisesOrderByRelationAggregateInput";
import { SubscriptionsOnTimelinesOrderByRelationAggregateInput } from "../inputs/SubscriptionsOnTimelinesOrderByRelationAggregateInput";
import { ThreadOrderByRelationAggregateInput } from "../inputs/ThreadOrderByRelationAggregateInput";
import { TimelineOrderByRelationAggregateInput } from "../inputs/TimelineOrderByRelationAggregateInput";
import { VisionOrderByRelationAggregateInput } from "../inputs/VisionOrderByRelationAggregateInput";
import { VotesOnPremiseOrderByRelationAggregateInput } from "../inputs/VotesOnPremiseOrderByRelationAggregateInput";
import { VotesOnThreadOrderByRelationAggregateInput } from "../inputs/VotesOnThreadOrderByRelationAggregateInput";
import { VotesOnTimelineOrderByRelationAggregateInput } from "../inputs/VotesOnTimelineOrderByRelationAggregateInput";
import { VotesOnVisionOrderByRelationAggregateInput } from "../inputs/VotesOnVisionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  emailVerified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput, {
    nullable: true
  })
  accounts?: AccountOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput, {
    nullable: true
  })
  sessions?: SessionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PremiseOrderByRelationAggregateInput, {
    nullable: true
  })
  premises?: PremiseOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThreadOrderByRelationAggregateInput, {
    nullable: true
  })
  threads?: ThreadOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VisionOrderByRelationAggregateInput, {
    nullable: true
  })
  visions?: VisionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TimelineOrderByRelationAggregateInput, {
    nullable: true
  })
  timelines?: TimelineOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsOrderByRelationAggregateInput, {
    nullable: true
  })
  reactionOnThreads?: ReactionOnThreadsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesOrderByRelationAggregateInput, {
    nullable: true
  })
  reactionOnTimelines?: ReactionOnTimelinesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsOrderByRelationAggregateInput, {
    nullable: true
  })
  reactionOnVisions?: ReactionOnVisionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionOrderByRelationAggregateInput, {
    nullable: true
  })
  votesOnVision?: VotesOnVisionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineOrderByRelationAggregateInput, {
    nullable: true
  })
  votesOnTimeline?: VotesOnTimelineOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseOrderByRelationAggregateInput, {
    nullable: true
  })
  votesOnPremise?: VotesOnPremiseOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadOrderByRelationAggregateInput, {
    nullable: true
  })
  votesOnThread?: VotesOnThreadOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesOrderByRelationAggregateInput, {
    nullable: true
  })
  subscriptionsOnPremises?: SubscriptionsOnPremisesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesOrderByRelationAggregateInput, {
    nullable: true
  })
  subscriptionsOnTimelines?: SubscriptionsOnTimelinesOrderByRelationAggregateInput | undefined;
}
