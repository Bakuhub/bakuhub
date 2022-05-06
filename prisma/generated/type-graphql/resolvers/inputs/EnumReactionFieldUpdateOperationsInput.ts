import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("EnumReactionFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumReactionFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Reaction, {
    nullable: true
  })
  set?: "LIKE" | "UPVOTE" | "DOWNVOTE" | undefined;
}
