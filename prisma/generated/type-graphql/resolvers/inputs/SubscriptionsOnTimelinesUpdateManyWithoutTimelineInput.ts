import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope } from "../inputs/SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope";
import { SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput";
import { SubscriptionsOnTimelinesCreateWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutTimelineInput";
import { SubscriptionsOnTimelinesScalarWhereInput } from "../inputs/SubscriptionsOnTimelinesScalarWhereInput";
import { SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput";
import { SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput";
import { SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput } from "../inputs/SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateWithoutTimelineInput], {
    nullable: true
  })
  create?: SubscriptionsOnTimelinesCreateWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionsOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput], {
    nullable: true
  })
  upsert?: SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionsOnTimelinesCreateManyTimelineInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  set?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  delete?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionsOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput], {
    nullable: true
  })
  update?: SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput], {
    nullable: true
  })
  updateMany?: SubscriptionsOnTimelinesUpdateManyWithWhereWithoutTimelineInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;
}
