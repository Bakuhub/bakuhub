import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCountAggregate } from "../outputs/SubscriptionsOnPremisesCountAggregate";
import { SubscriptionsOnPremisesMaxAggregate } from "../outputs/SubscriptionsOnPremisesMaxAggregate";
import { SubscriptionsOnPremisesMinAggregate } from "../outputs/SubscriptionsOnPremisesMinAggregate";

@TypeGraphQL.ObjectType("AggregateSubscriptionsOnPremises", {
  isAbstract: true
})
export class AggregateSubscriptionsOnPremises {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCountAggregate, {
    nullable: true
  })
  _count!: SubscriptionsOnPremisesCountAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesMinAggregate, {
    nullable: true
  })
  _min!: SubscriptionsOnPremisesMinAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesMaxAggregate, {
    nullable: true
  })
  _max!: SubscriptionsOnPremisesMaxAggregate | null;
}
