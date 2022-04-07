import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReactionFilter } from "../inputs/NestedEnumReactionFilter";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("EnumReactionFilter", {
  isAbstract: true
})
export class EnumReactionFilter {
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
