import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCountAggregate } from "../outputs/SubscriptionsOnPremisesCountAggregate";
import { SubscriptionsOnPremisesMaxAggregate } from "../outputs/SubscriptionsOnPremisesMaxAggregate";
import { SubscriptionsOnPremisesMinAggregate } from "../outputs/SubscriptionsOnPremisesMinAggregate";
import { SubscriptionType } from "../../enums/SubscriptionType";

@TypeGraphQL.ObjectType("SubscriptionsOnPremisesGroupBy", {
  isAbstract: true
})
export class SubscriptionsOnPremisesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  hasUnreadNotifications!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  lastReadAt!: Date;

  @TypeGraphQL.Field(_type => SubscriptionType, {
    nullable: false
  })
  type!: "AUTO" | "MANUAL";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
