import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput";
import { SubscriptionsOnTimelinesUpdateWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateWithoutTimelineInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnTimelinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateWithoutTimelineInput, {
    nullable: false
  })
  update!: SubscriptionsOnTimelinesUpdateWithoutTimelineInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: SubscriptionsOnTimelinesCreateWithoutTimelineInput;
}
