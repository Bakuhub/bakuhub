import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnMergeRequestCountAggregate } from "../outputs/ThreadsOnMergeRequestCountAggregate";
import { ThreadsOnMergeRequestMaxAggregate } from "../outputs/ThreadsOnMergeRequestMaxAggregate";
import { ThreadsOnMergeRequestMinAggregate } from "../outputs/ThreadsOnMergeRequestMinAggregate";

@TypeGraphQL.ObjectType("AggregateThreadsOnMergeRequest", {
  isAbstract: true
})
export class AggregateThreadsOnMergeRequest {
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
