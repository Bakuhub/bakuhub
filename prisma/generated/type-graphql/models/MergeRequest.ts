import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ThreadsOnMergeRequest } from "../models/ThreadsOnMergeRequest";
import { Vision } from "../models/Vision";
import { MergeRequestStatus } from "../enums/MergeRequestStatus";
import { MergeRequestCount } from "../resolvers/outputs/MergeRequestCount";

@TypeGraphQL.ObjectType("MergeRequest", {
  isAbstract: true
})
export class MergeRequest {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => MergeRequestStatus, {
    nullable: false
  })
  status!: "OPEN" | "CLOSE" | "MERGED";

  vision?: Vision;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;

  threadsOnMergeRequest?: ThreadsOnMergeRequest[];

  @TypeGraphQL.Field(_type => MergeRequestCount, {
    nullable: true
  })
  _count?: MergeRequestCount | null;
}
