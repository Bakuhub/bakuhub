import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutReactionOnTimelinesInput } from "../inputs/UserCreateNestedOneWithoutReactionOnTimelinesInput";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("ReactionOnTimelinesCreateWithoutTimelineInput", {
  isAbstract: true
})
export class ReactionOnTimelinesCreateWithoutTimelineInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnTimelinesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutReactionOnTimelinesInput;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: false
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
