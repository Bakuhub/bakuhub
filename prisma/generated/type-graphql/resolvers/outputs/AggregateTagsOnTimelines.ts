import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesAvgAggregate } from "../outputs/TagsOnTimelinesAvgAggregate";
import { TagsOnTimelinesCountAggregate } from "../outputs/TagsOnTimelinesCountAggregate";
import { TagsOnTimelinesMaxAggregate } from "../outputs/TagsOnTimelinesMaxAggregate";
import { TagsOnTimelinesMinAggregate } from "../outputs/TagsOnTimelinesMinAggregate";
import { TagsOnTimelinesSumAggregate } from "../outputs/TagsOnTimelinesSumAggregate";

@TypeGraphQL.ObjectType("AggregateTagsOnTimelines", {
  isAbstract: true
})
export class AggregateTagsOnTimelines {
  @TypeGraphQL.Field(_type => TagsOnTimelinesCountAggregate, {
    nullable: true
  })
  _count!: TagsOnTimelinesCountAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnTimelinesAvgAggregate, {
    nullable: true
  })
  _avg!: TagsOnTimelinesAvgAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnTimelinesSumAggregate, {
    nullable: true
  })
  _sum!: TagsOnTimelinesSumAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnTimelinesMinAggregate, {
    nullable: true
  })
  _min!: TagsOnTimelinesMinAggregate | null;

  @TypeGraphQL.Field(_type => TagsOnTimelinesMaxAggregate, {
    nullable: true
  })
  _max!: TagsOnTimelinesMaxAggregate | null;
}
