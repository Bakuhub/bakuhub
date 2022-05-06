import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Timeline } from "../models/Timeline";
import { User } from "../models/User";
import { SubscriptionType } from "../enums/SubscriptionType";

@TypeGraphQL.ObjectType("SubscriptionsOnTimelines", {
  isAbstract: true
})
export class SubscriptionsOnTimelines {
  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  timeline?: Timeline;

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
}
