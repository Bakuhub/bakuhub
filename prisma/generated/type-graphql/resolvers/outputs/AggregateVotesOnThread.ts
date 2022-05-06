import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadAvgAggregate } from "../outputs/VotesOnThreadAvgAggregate";
import { VotesOnThreadCountAggregate } from "../outputs/VotesOnThreadCountAggregate";
import { VotesOnThreadMaxAggregate } from "../outputs/VotesOnThreadMaxAggregate";
import { VotesOnThreadMinAggregate } from "../outputs/VotesOnThreadMinAggregate";
import { VotesOnThreadSumAggregate } from "../outputs/VotesOnThreadSumAggregate";

@TypeGraphQL.ObjectType("AggregateVotesOnThread", {
  isAbstract: true
})
export class AggregateVotesOnThread {
  @TypeGraphQL.Field(_type => VotesOnThreadCountAggregate, {
    nullable: true
  })
  _count!: VotesOnThreadCountAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnThreadAvgAggregate, {
    nullable: true
  })
  _avg!: VotesOnThreadAvgAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnThreadSumAggregate, {
    nullable: true
  })
  _sum!: VotesOnThreadSumAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnThreadMinAggregate, {
    nullable: true
  })
  _min!: VotesOnThreadMinAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnThreadMaxAggregate, {
    nullable: true
  })
  _max!: VotesOnThreadMaxAggregate | null;
}
