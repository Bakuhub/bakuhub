import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Reaction } from "../../enums/Reaction";

@TypeGraphQL.ObjectType("ReactionOnVisionsMinAggregate", {
  isAbstract: true
})
export class ReactionOnVisionsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visionId!: string | null;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: true
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
