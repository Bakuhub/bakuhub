import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput";
import { TimelineCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/TimelineCreateWithoutSubscriptionsOnTimelinesInput";
import { TimelineWhereUniqueInput } from "../inputs/TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput", {
  isAbstract: true
})
export class TimelineCreateNestedOneWithoutSubscriptionsOnTimelinesInput {
  @TypeGraphQL.Field(_type => TimelineCreateWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  create?: TimelineCreateWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: TimelineCreateOrConnectWithoutSubscriptionsOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
    nullable: true
  })
  connect?: TimelineWhereUniqueInput | undefined;
}
