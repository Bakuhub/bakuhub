import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotCountAggregate } from "../outputs/SnapshotCountAggregate";
import { SnapshotMaxAggregate } from "../outputs/SnapshotMaxAggregate";
import { SnapshotMinAggregate } from "../outputs/SnapshotMinAggregate";

@TypeGraphQL.ObjectType("AggregateSnapshot", {
  isAbstract: true
})
export class AggregateSnapshot {
  @TypeGraphQL.Field(_type => SnapshotCountAggregate, {
    nullable: true
  })
  _count!: SnapshotCountAggregate | null;

  @TypeGraphQL.Field(_type => SnapshotMinAggregate, {
    nullable: true
  })
  _min!: SnapshotMinAggregate | null;

  @TypeGraphQL.Field(_type => SnapshotMaxAggregate, {
    nullable: true
  })
  _max!: SnapshotMaxAggregate | null;
}
