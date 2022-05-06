import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateNestedOneWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutReactionOnTimelinesInput";
import { UserCreateNestedOneWithoutReactionOnTimelinesInput } from "../inputs/UserCreateNestedOneWithoutReactionOnTimelinesInput";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("ReactionOnTimelinesCreateInput", {
  isAbstract: true
})
export class ReactionOnTimelinesCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnTimelinesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutReactionOnTimelinesInput;

  @TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutReactionOnTimelinesInput, {
    nullable: false
  })
  timeline!: TimelineCreateNestedOneWithoutReactionOnTimelinesInput;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: false
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
