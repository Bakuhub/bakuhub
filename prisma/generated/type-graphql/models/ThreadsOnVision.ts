import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Thread } from "../models/Thread";
import { Vision } from "../models/Vision";

@TypeGraphQL.ObjectType("ThreadsOnVision", {
  isAbstract: true
})
export class ThreadsOnVision {
  thread?: Thread;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  threadId!: string;

  vision?: Vision;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;
}
