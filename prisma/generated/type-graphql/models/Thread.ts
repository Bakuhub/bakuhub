import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ThreadsOnPremise } from "../models/ThreadsOnPremise";
import { ThreadsOnTimeline } from "../models/ThreadsOnTimeline";
import { ThreadsOnVision } from "../models/ThreadsOnVision";
import { ThreadCount } from "../resolvers/outputs/ThreadCount";

@TypeGraphQL.ObjectType("Thread", {
  isAbstract: true
})
export class Thread {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  activityDate?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reference?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentThreadId?: string | null;

  parentThread?: Thread | null;

  childThreads?: Thread[];

  threadsOnPremise?: ThreadsOnPremise | null;

  threadsOnTimeline?: ThreadsOnTimeline | null;

  threadsOnVision?: ThreadsOnVision | null;

  @TypeGraphQL.Field(_type => ThreadCount, {
    nullable: true
  })
  _count?: ThreadCount | null;
}
