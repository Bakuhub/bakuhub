import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Account } from "../models/Account";
import { Premise } from "../models/Premise";
import { ReactionOnThreads } from "../models/ReactionOnThreads";
import { ReactionOnTimelines } from "../models/ReactionOnTimelines";
import { ReactionOnVisions } from "../models/ReactionOnVisions";
import { Session } from "../models/Session";
import { SubscriptionsOnPremises } from "../models/SubscriptionsOnPremises";
import { SubscriptionsOnTimelines } from "../models/SubscriptionsOnTimelines";
import { Thread } from "../models/Thread";
import { Timeline } from "../models/Timeline";
import { Vision } from "../models/Vision";
import { VotesOnPremise } from "../models/VotesOnPremise";
import { VotesOnThread } from "../models/VotesOnThread";
import { VotesOnTimeline } from "../models/VotesOnTimeline";
import { VotesOnVision } from "../models/VotesOnVision";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  emailVerified?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | null;

  accounts?: Account[];

  sessions?: Session[];

  premises?: Premise[];

  threads?: Thread[];

  visions?: Vision[];

  timelines?: Timeline[];

  reactionOnThreads?: ReactionOnThreads[];

  reactionOnTimelines?: ReactionOnTimelines[];

  reactionOnVisions?: ReactionOnVisions[];

  votesOnVision?: VotesOnVision[];

  votesOnTimeline?: VotesOnTimeline[];

  votesOnPremise?: VotesOnPremise[];

  votesOnThread?: VotesOnThread[];

  subscriptionsOnPremises?: SubscriptionsOnPremises[];

  subscriptionsOnTimelines?: SubscriptionsOnTimelines[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
