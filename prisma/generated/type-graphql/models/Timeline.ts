import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PremisesOnTimelines } from "../models/PremisesOnTimelines";
import { ReactionOnTimelines } from "../models/ReactionOnTimelines";
import { TagsOnTimelines } from "../models/TagsOnTimelines";
import { ThreadsOnTimeline } from "../models/ThreadsOnTimeline";
import { User } from "../models/User";
import { TimelineCount } from "../resolvers/outputs/TimelineCount";

@TypeGraphQL.ObjectType("Timeline", {
  isAbstract: true
})
export class Timeline {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  author?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  premisesOnTimelines?: PremisesOnTimelines[];

  tagsOnTimelines?: TagsOnTimelines[];

  threadsOnTimeline?: ThreadsOnTimeline[];

  ReactionOnTimelines?: ReactionOnTimelines[];

  @TypeGraphQL.Field(_type => TimelineCount, {
    nullable: true
  })
  _count?: TimelineCount | null;
}
