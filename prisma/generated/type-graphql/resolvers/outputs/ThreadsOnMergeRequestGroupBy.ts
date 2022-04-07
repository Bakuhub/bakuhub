import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCountAggregate } from "../outputs/ThreadsOnMergeRequestCountAggregate";
import { ThreadsOnMergeRequestMaxAggregate } from "../outputs/ThreadsOnMergeRequestMaxAggregate";
import { ThreadsOnMergeRequestMinAggregate } from "../outputs/ThreadsOnMergeRequestMinAggregate";

@TypeGraphQL.ObjectType("ThreadsOnMergeRequestGroupBy", {
  isAbstract: true
})
export class ThreadsOnMergeRequestGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  threadId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mergeRequestId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  assignedAt!: Date;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestCountAggregate, {
    nullable: true
  })
  _count!: ThreadsOnMergeRequestCountAggregate | null;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestMinAggregate, {
    nullable: true
  })
  _min!: ThreadsOnMergeRequestMinAggregate | null;

  @TypeGraphQL.Field(_type => ThreadsOnMergeRequestMaxAggregate, {
    nullable: true
  })
  _max!: ThreadsOnMergeRequestMaxAggregate | null;
}
