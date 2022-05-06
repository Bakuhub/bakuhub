import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateNestedOneWithoutReactionOnVisionsInput } from "../inputs/VisionCreateNestedOneWithoutReactionOnVisionsInput";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("ReactionOnVisionsCreateWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnVisionsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutReactionOnVisionsInput, {
    nullable: false
  })
  vision!: VisionCreateNestedOneWithoutReactionOnVisionsInput;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: false
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
