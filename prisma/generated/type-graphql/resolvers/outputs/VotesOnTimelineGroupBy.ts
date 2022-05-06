import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnTimelineAvgAggregate } from "../outputs/VotesOnTimelineAvgAggregate";
import { VotesOnTimelineCountAggregate } from "../outputs/VotesOnTimelineCountAggregate";
import { VotesOnTimelineMaxAggregate } from "../outputs/VotesOnTimelineMaxAggregate";
import { VotesOnTimelineMinAggregate } from "../outputs/VotesOnTimelineMinAggregate";
import { VotesOnTimelineSumAggregate } from "../outputs/VotesOnTimelineSumAggregate";

@TypeGraphQL.ObjectType("VotesOnTimelineGroupBy", {
  isAbstract: true
})
export class VotesOnTimelineGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timelineId!: string;

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

  @TypeGraphQL.Field(_type => VotesOnTimelineCountAggregate, {
    nullable: true
  })
  _count!: VotesOnTimelineCountAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnTimelineAvgAggregate, {
    nullable: true
  })
  _avg!: VotesOnTimelineAvgAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnTimelineSumAggregate, {
    nullable: true
  })
  _sum!: VotesOnTimelineSumAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnTimelineMinAggregate, {
    nullable: true
  })
  _min!: VotesOnTimelineMinAggregate | null;

  @TypeGraphQL.Field(_type => VotesOnTimelineMaxAggregate, {
    nullable: true
  })
  _max!: VotesOnTimelineMaxAggregate | null;
}
