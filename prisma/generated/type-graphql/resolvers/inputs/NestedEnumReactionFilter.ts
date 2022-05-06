import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("NestedEnumReactionFilter", {
  isAbstract: true
})
export class NestedEnumReactionFilter {
  @TypeGraphQL.Field(_type => Reaction, {
    nullable: true
  })
  equals?: "LIKE" | "UPVOTE" | "DOWNVOTE" | undefined;

  @TypeGraphQL.Field(_type => [Reaction], {
    nullable: true
  })
  in?: Array<"LIKE" | "UPVOTE" | "DOWNVOTE"> | undefined;

  @TypeGraphQL.Field(_type => [Reaction], {
    nullable: true
  })
  notIn?: Array<"LIKE" | "UPVOTE" | "DOWNVOTE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReactionFilter, {
    nullable: true
  })
  not?: NestedEnumReactionFilter | undefined;
}
