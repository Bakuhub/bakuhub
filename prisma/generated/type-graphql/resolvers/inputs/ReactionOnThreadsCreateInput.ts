import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateNestedOneWithoutReactionOnThreadsInput } from "../inputs/ThreadCreateNestedOneWithoutReactionOnThreadsInput";
import { UserCreateNestedOneWithoutReactionOnThreadsInput } from "../inputs/UserCreateNestedOneWithoutReactionOnThreadsInput";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("ReactionOnThreadsCreateInput", {
  isAbstract: true
})
export class ReactionOnThreadsCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnThreadsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutReactionOnThreadsInput;

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
