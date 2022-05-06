import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnTimelinesCreateManyUserInputEnvelope } from "../inputs/SubscriptionsOnTimelinesCreateManyUserInputEnvelope";
import { SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput";
import { SubscriptionsOnTimelinesCreateWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesCreateWithoutUserInput";
import { SubscriptionsOnTimelinesScalarWhereInput } from "../inputs/SubscriptionsOnTimelinesScalarWhereInput";
import { SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput";
import { SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput";
import { SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput";
import { SubscriptionsOnTimelinesWhereUniqueInput } from "../inputs/SubscriptionsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnTimelinesUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateWithoutUserInput], {
    nullable: true
  })
  create?: SubscriptionsOnTimelinesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionsOnTimelinesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SubscriptionsOnTimelinesUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionsOnTimelinesCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SubscriptionsOnTimelinesUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SubscriptionsOnTimelinesUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubscriptionsOnTimelinesScalarWhereInput[] | undefined;
}
