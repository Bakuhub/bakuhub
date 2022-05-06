import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReactionFilter } from "../inputs/NestedEnumReactionFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.InputType("NestedEnumReactionWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumReactionWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumReactionWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumReactionWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReactionFilter, {
    nullable: true
  })
  _min?: NestedEnumReactionFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReactionFilter, {
    nullable: true
  })
  _max?: NestedEnumReactionFilter | undefined;
}
