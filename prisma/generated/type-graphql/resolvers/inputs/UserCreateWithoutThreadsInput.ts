import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { PremiseCreateNestedManyWithoutAuthorInput } from "../inputs/PremiseCreateNestedManyWithoutAuthorInput";
import { ReactionOnThreadsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput";
import { ReactionOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput";
import { ReactionOnVisionsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { SubscriptionsOnPremisesCreateNestedManyWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutUserInput";
import { SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput";
import { TimelineCreateNestedManyWithoutAuthorInput } from "../inputs/TimelineCreateNestedManyWithoutAuthorInput";
import { VisionCreateNestedManyWithoutAuthorInput } from "../inputs/VisionCreateNestedManyWithoutAuthorInput";
import { VotesOnPremiseCreateNestedManyWithoutUserInput } from "../inputs/VotesOnPremiseCreateNestedManyWithoutUserInput";
import { VotesOnThreadCreateNestedManyWithoutUserInput } from "../inputs/VotesOnThreadCreateNestedManyWithoutUserInput";
import { VotesOnTimelineCreateNestedManyWithoutUserInput } from "../inputs/VotesOnTimelineCreateNestedManyWithoutUserInput";
import { VotesOnVisionCreateNestedManyWithoutUserInput } from "../inputs/VotesOnVisionCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutThreadsInput", {
  isAbstract: true
})
export class UserCreateWithoutThreadsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  sessions?: SessionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PremiseCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  premises?: PremiseCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  visions?: VisionCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  timelines?: TimelineCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnThreadsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  reactionOnThreads?: ReactionOnThreadsCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  reactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  reactionOnVisions?: ReactionOnVisionsCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnVisionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  votesOnVision?: VotesOnVisionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  votesOnTimeline?: VotesOnTimelineCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  votesOnPremise?: VotesOnPremiseCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => VotesOnThreadCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  votesOnThread?: VotesOnThreadCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  subscriptionsOnPremises?: SubscriptionsOnPremisesCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  subscriptionsOnTimelines?: SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput | undefined;
}
