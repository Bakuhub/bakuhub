import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionType } from "../../enums/SubscriptionType";

@TypeGraphQL.ObjectType("SubscriptionsOnTimelinesMinAggregate", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timelineId!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasUnreadNotifications!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastReadAt!: Date | null;

  @TypeGraphQL.Field(_type => SubscriptionType, {
    nullable: true
  })
  type!: "AUTO" | "MANUAL" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
