import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutReactionOnVisionsInput } from "../inputs/UserCreateNestedOneWithoutReactionOnVisionsInput";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("ReactionOnVisionsCreateWithoutVisionInput", {
  isAbstract: true
})
export class ReactionOnVisionsCreateWithoutVisionInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnVisionsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutReactionOnVisionsInput;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: false
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
