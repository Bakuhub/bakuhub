import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateNestedOneWithoutReactionOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutReactionOnTimelinesInput";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("ReactionOnTimelinesCreateWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnTimelinesCreateWithoutUserInput {
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
