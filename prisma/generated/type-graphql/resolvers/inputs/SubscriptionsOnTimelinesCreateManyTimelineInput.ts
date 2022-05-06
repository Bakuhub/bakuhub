import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionType } from "../../enums/SubscriptionType";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateManyTimelineInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesCreateManyTimelineInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hasUnreadNotifications?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastReadAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SubscriptionType, {
    nullable: true
  })
  type?: "AUTO" | "MANUAL" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
