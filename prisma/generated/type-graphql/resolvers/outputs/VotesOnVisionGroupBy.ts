import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionAvgAggregate } from "../outputs/VotesOnVisionAvgAggregate";
import { VotesOnVisionCountAggregate } from "../outputs/VotesOnVisionCountAggregate";
import { VotesOnVisionMaxAggregate } from "../outputs/VotesOnVisionMaxAggregate";
import { VotesOnVisionMinAggregate } from "../outputs/VotesOnVisionMinAggregate";
import { VotesOnVisionSumAggregate } from "../outputs/VotesOnVisionSumAggregate";

@TypeGraphQL.ObjectType("VotesOnVisionGroupBy", {
  isAbstract: true
})
export class VotesOnVisionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;

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
