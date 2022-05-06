import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PremisesOnTimelines } from "../models/PremisesOnTimelines";
import { ReactionOnTimelines } from "../models/ReactionOnTimelines";
import { SubscriptionsOnTimelines } from "../models/SubscriptionsOnTimelines";
import { TagsOnTimelines } from "../models/TagsOnTimelines";
import { ThreadsOnTimeline } from "../models/ThreadsOnTimeline";
import { User } from "../models/User";
import { VotesOnTimeline } from "../models/VotesOnTimeline";
import { TimelineCount } from "../resolvers/outputs/TimelineCount";

@TypeGraphQL.ObjectType("Timeline", {
  isAbstract: true
})
export class Timeline {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | null;

  author?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  premisesOnTimelines?: PremisesOnTimelines[];

  tagsOnTimelines?: TagsOnTimelines[];

  threadsOnTimeline?: ThreadsOnTimeline[];

  reactionOnTimelines?: ReactionOnTimelines[];

  votesOnTimeline?: VotesOnTimeline[];

  subscriptionsOnTimelines?: SubscriptionsOnTimelines[];

  @TypeGraphQL.Field(_type => TimelineCount, {
    nullable: true
  })
  _count?: TimelineCount | null;
}
