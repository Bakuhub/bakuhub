import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope";
import { SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput";
import { SubscriptionsOnTimelinesCreateWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateWithoutTimelineInput], {
    nullable: true
  })
  create?: SubscriptionsOnTimelinesCreateWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;
}
