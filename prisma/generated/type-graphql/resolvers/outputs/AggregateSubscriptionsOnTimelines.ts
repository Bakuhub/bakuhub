import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCountAggregate } from "../outputs/SubscriptionsOnTimelinesCountAggregate";
import { SubscriptionsOnTimelinesMaxAggregate } from "../outputs/SubscriptionsOnTimelinesMaxAggregate";
import { SubscriptionsOnTimelinesMinAggregate } from "../outputs/SubscriptionsOnTimelinesMinAggregate";

@TypeGraphQL.ObjectType("AggregateSubscriptionsOnTimelines", {
  isAbstract: true
})
export class AggregateSubscriptionsOnTimelines {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCountAggregate, {
    nullable: true
  })
  _count!: SubscriptionsOnTimelinesCountAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMinAggregate, {
    nullable: true
  })
  _min!: SubscriptionsOnTimelinesMinAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMaxAggregate, {
    nullable: true
  })
  _max!: SubscriptionsOnTimelinesMaxAggregate | null;
}
