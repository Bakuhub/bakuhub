import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCountAggregate } from "../outputs/SubscriptionsOnTimelinesCountAggregate";
import { SubscriptionsOnTimelinesMaxAggregate } from "../outputs/SubscriptionsOnTimelinesMaxAggregate";
import { SubscriptionsOnTimelinesMinAggregate } from "../outputs/SubscriptionsOnTimelinesMinAggregate";
import { SubscriptionType } from "../../enums/SubscriptionType";

@TypeGraphQL.ObjectType("SubscriptionsOnTimelinesGroupBy", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timelineId!: string;

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
