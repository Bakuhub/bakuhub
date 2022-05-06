import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadAvgAggregate } from "../outputs/VotesOnThreadAvgAggregate";
import { VotesOnThreadCountAggregate } from "../outputs/VotesOnThreadCountAggregate";
import { VotesOnThreadMaxAggregate } from "../outputs/VotesOnThreadMaxAggregate";
import { VotesOnThreadMinAggregate } from "../outputs/VotesOnThreadMinAggregate";
import { VotesOnThreadSumAggregate } from "../outputs/VotesOnThreadSumAggregate";

@TypeGraphQL.ObjectType("VotesOnThreadGroupBy", {
  isAbstract: true
})
export class VotesOnThreadGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  threadId!: string;

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
