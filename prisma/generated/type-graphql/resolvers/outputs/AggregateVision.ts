import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCountAggregate } from "../outputs/VisionCountAggregate";
import { VisionMaxAggregate } from "../outputs/VisionMaxAggregate";
import { VisionMinAggregate } from "../outputs/VisionMinAggregate";

@TypeGraphQL.ObjectType("AggregateVision", {
  isAbstract: true
})
export class AggregateVision {
  @TypeGraphQL.Field(_type => VisionCountAggregate, {
    nullable: true
  })
  _count!: VisionCountAggregate | null;

  @TypeGraphQL.Field(_type => VisionMinAggregate, {
    nullable: true
  })
  _min!: VisionMinAggregate | null;

  @TypeGraphQL.Field(_type => VisionMaxAggregate, {
    nullable: true
  })
  _max!: VisionMaxAggregate | null;
}
