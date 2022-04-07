import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MergeRequest } from "../models/MergeRequest";
import { Thread } from "../models/Thread";

@TypeGraphQL.ObjectType("ThreadsOnMergeRequest", {
  isAbstract: true
})
export class ThreadsOnMergeRequest {
  thread?: Thread;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  threadId!: string;

  mergeRequest?: MergeRequest;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mergeRequestId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;
}
