import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesUpdateWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateWithoutTimelineInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateWithoutTimelineInput, {
    nullable: false
  })
  data!: SubscriptionsOnTimelinesUpdateWithoutTimelineInput;
}
