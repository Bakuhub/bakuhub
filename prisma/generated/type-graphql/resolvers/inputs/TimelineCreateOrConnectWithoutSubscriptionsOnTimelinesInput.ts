import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput", {
  isAbstract: true
})
export class TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: false
  })
  where!: TimelineWhereUniqueInput;

  @TypeGraphQL.Field(_type => TimelineCreateWithoutSubscriptionsOnTimelinesInput, {
    nullable: false
  })
  create!: TimelineCreateWithoutSubscriptionsOnTimelinesInput;
}
