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
import { ThreadOrderByRelationAggregateInput } from "../inputs/ThreadOrderByRelationAggregateInput";
import { TimelineOrderByRelationAggregateInput } from "../inputs/TimelineOrderByRelationAggregateInput";
import { VisionOrderByRelationAggregateInput } from "../inputs/VisionOrderByRelationAggregateInput";
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
  ReactionOnThreads?: ReactionOnThreadsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesOrderByRelationAggregateInput, {
    nullable: true
  })
  ReactionOnTimelines?: ReactionOnTimelinesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsOrderByRelationAggregateInput, {
    nullable: true
  })
  ReactionOnVisions?: ReactionOnVisionsOrderByRelationAggregateInput | undefined;
}
