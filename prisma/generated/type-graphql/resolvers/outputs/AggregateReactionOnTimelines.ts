import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnTimelinesCountAggregate } from "../outputs/ReactionOnTimelinesCountAggregate";
import { ReactionOnTimelinesMaxAggregate } from "../outputs/ReactionOnTimelinesMaxAggregate";
import { ReactionOnTimelinesMinAggregate } from "../outputs/ReactionOnTimelinesMinAggregate";

@TypeGraphQL.ObjectType("AggregateReactionOnTimelines", {
  isAbstract: true
})
export class AggregateReactionOnTimelines {
  @TypeGraphQL.Field(_type => ReactionOnTimelinesCountAggregate, {
    nullable: true
  })
  _count!: ReactionOnTimelinesCountAggregate | null;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesMinAggregate, {
    nullable: true
  })
  _min!: ReactionOnTimelinesMinAggregate | null;

  @TypeGraphQL.Field(_type => ReactionOnTimelinesMaxAggregate, {
    nullable: true
  })
  _max!: ReactionOnTimelinesMaxAggregate | null;
}
