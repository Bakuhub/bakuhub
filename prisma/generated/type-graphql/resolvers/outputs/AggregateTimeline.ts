import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCountAggregate } from "../outputs/TimelineCountAggregate";
import { TimelineMaxAggregate } from "../outputs/TimelineMaxAggregate";
import { TimelineMinAggregate } from "../outputs/TimelineMinAggregate";

@TypeGraphQL.ObjectType("AggregateTimeline", {
  isAbstract: true
})
export class AggregateTimeline {
  @TypeGraphQL.Field(_type => TimelineCountAggregate, {
    nullable: true
  })
  _count!: TimelineCountAggregate | null;

  @TypeGraphQL.Field(_type => TimelineMinAggregate, {
    nullable: true
  })
  _min!: TimelineMinAggregate | null;

  @TypeGraphQL.Field(_type => TimelineMaxAggregate, {
    nullable: true
  })
  _max!: TimelineMaxAggregate | null;
}
