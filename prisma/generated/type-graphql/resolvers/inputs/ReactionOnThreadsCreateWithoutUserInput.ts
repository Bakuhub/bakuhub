import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateNestedOneWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateNestedOneWithoutReactionOnThreadsInput";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("ReactionOnThreadsCreateWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnThreadsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutReactionOnThreadsInput, {
    nullable: false
  })
  thread!: ThreadCreateNestedOneWithoutReactionOnThreadsInput;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: false
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
