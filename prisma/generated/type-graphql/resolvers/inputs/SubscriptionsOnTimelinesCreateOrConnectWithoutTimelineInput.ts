import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: SubscriptionsOnTimelinesCreateWithoutTimelineInput;
}
