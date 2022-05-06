import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionAvgAggregate } from "../outputs/VotesOnVisionAvgAggregate";
import { VotesOnVisionCountAggregate } from "../outputs/VotesOnVisionCountAggregate";
import { VotesOnVisionMaxAggregate } from "../outputs/VotesOnVisionMaxAggregate";
import { VotesOnVisionMinAggregate } from "../outputs/VotesOnVisionMinAggregate";
import { VotesOnVisionSumAggregate } from "../outputs/VotesOnVisionSumAggregate";

@TypeGraphQL.ObjectType("AggregateVotesOnVision", {
  isAbstract: true
})
export class AggregateVotesOnVision {
  @TypeGraphQL.Field(_type => VotesOnVisionCountAggregate, {
    nullable: true
  })
  _count!: VotesOnVisionCountAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnVisionAvgAggregate, {
    nullable: true
  })
  _avg!: VotesOnVisionAvgAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnVisionSumAggregate, {
    nullable: true
  })
  _sum!: VotesOnVisionSumAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnVisionMinAggregate, {
    nullable: true
  })
  _min!: VotesOnVisionMinAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnVisionMaxAggregate, {
    nullable: true
  })
  _max!: VotesOnVisionMaxAggregate | null;
}
