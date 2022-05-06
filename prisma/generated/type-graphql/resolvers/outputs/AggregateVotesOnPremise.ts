import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseAvgAggregate } from "../outputs/VotesOnPremiseAvgAggregate";
import { VotesOnPremiseCountAggregate } from "../outputs/VotesOnPremiseCountAggregate";
import { VotesOnPremiseMaxAggregate } from "../outputs/VotesOnPremiseMaxAggregate";
import { VotesOnPremiseMinAggregate } from "../outputs/VotesOnPremiseMinAggregate";
import { VotesOnPremiseSumAggregate } from "../outputs/VotesOnPremiseSumAggregate";

@TypeGraphQL.ObjectType("AggregateVotesOnPremise", {
  isAbstract: true
})
export class AggregateVotesOnPremise {
  @TypeGraphQL.Field(_type => VotesOnPremiseCountAggregate, {
    nullable: true
  })
  _count!: VotesOnPremiseCountAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnPremiseAvgAggregate, {
    nullable: true
  })
  _avg!: VotesOnPremiseAvgAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnPremiseSumAggregate, {
    nullable: true
  })
  _sum!: VotesOnPremiseSumAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnPremiseMinAggregate, {
    nullable: true
  })
  _min!: VotesOnPremiseMinAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnPremiseMaxAggregate, {
    nullable: true
  })
  _max!: VotesOnPremiseMaxAggregate | null;
}
