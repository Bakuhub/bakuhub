import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { PremiseCreateNestedManyWithoutAuthorInput } from "../inputs/PremiseCreateNestedManyWithoutAuthorInput";
import { ReactionOnTimelinesCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput";
import { ReactionOnVisionsCreateNestedManyWithoutUserInput } from "../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { ThreadCreateNestedManyWithoutAuthorInput } from "../inputs/ThreadCreateNestedManyWithoutAuthorInput";
import { TimelineCreateNestedManyWithoutAuthorInput } from "../inputs/TimelineCreateNestedManyWithoutAuthorInput";
import { VisionCreateNestedManyWithoutAuthorInput } from "../inputs/VisionCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("UserCreateWithoutReactionOnThreadsInput", {
  isAbstract: true
})
export class UserCreateWithoutReactionOnThreadsInput {
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

  @TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  threads?: ThreadCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  visions?: VisionCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  timelines?: TimelineCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  ReactionOnTimelines?: ReactionOnTimelinesCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  ReactionOnVisions?: ReactionOnVisionsCreateNestedManyWithoutUserInput | undefined;
}