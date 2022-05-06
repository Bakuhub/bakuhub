import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Thread } from "../models/Thread";
import { Timeline } from "../models/Timeline";

@TypeGraphQL.ObjectType("ThreadsOnTimeline", {
  isAbstract: true
})
export class ThreadsOnTimeline {
  thread?: Thread;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  threadId!: string;

  timeline?: Timeline;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timelineId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;
}
