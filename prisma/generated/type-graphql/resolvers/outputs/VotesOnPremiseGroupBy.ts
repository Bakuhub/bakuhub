import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseAvgAggregate } from "../outputs/VotesOnPremiseAvgAggregate";
import { VotesOnPremiseCountAggregate } from "../outputs/VotesOnPremiseCountAggregate";
import { VotesOnPremiseMaxAggregate } from "../outputs/VotesOnPremiseMaxAggregate";
import { VotesOnPremiseMinAggregate } from "../outputs/VotesOnPremiseMinAggregate";
import { VotesOnPremiseSumAggregate } from "../outputs/VotesOnPremiseSumAggregate";

@TypeGraphQL.ObjectType("VotesOnPremiseGroupBy", {
  isAbstract: true
})
export class VotesOnPremiseGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  vote!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
