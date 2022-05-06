import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput";
import { UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput";
import { SubscriptionType } from "../../enums/SubscriptionType";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSubscriptionsOnTimelinesInput;

  @TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput, {
    nullable: false
  })
  timeline!: TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput;

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
