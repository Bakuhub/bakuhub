import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnVisionCountAggregate } from "../outputs/ThreadsOnVisionCountAggregate";
import { ThreadsOnVisionMaxAggregate } from "../outputs/ThreadsOnVisionMaxAggregate";
import { ThreadsOnVisionMinAggregate } from "../outputs/ThreadsOnVisionMinAggregate";

@TypeGraphQL.ObjectType("AggregateThreadsOnVision", {
  isAbstract: true
})
export class AggregateThreadsOnVision {
  @TypeGraphQL.Field(_type => ThreadsOnVisionCountAggregate, {
    nullable: true
  })
  _count!: ThreadsOnVisionCountAggregate | null;

  @TypeGraphQL.Field(_type => ThreadsOnVisionMinAggregate, {
    nullable: true
  })
  _min!: ThreadsOnVisionMinAggregate | null;

  @TypeGraphQL.Field(_type => ThreadsOnVisionMaxAggregate, {
    nullable: true
  })
  _max!: ThreadsOnVisionMaxAggregate | null;
}
