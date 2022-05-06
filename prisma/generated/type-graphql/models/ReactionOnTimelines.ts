import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Timeline } from "../models/Timeline";
import { User } from "../models/User";
import { Reaction } from "../enums/Reaction";

@TypeGraphQL.ObjectType("ReactionOnTimelines", {
  isAbstract: true
})
export class ReactionOnTimelines {
  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  timeline?: Timeline;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timelineId!: string;

  @TypeGraphQL.Field(_type => Reaction, {
    nullable: false
  })
  reaction!: "LIKE" | "UPVOTE" | "DOWNVOTE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
