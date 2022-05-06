import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateManyUserInputEnvelope } from "../inputs/SubscriptionsOnPremisesCreateManyUserInputEnvelope";
import { SubscriptionsOnPremisesCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutUserInput";
import { SubscriptionsOnPremisesCreateWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutUserInput";
import { SubscriptionsOnPremisesScalarWhereInput } from "../inputs/SubscriptionsOnPremisesScalarWhereInput";
import { SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput";
import { SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput";
import { SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateWithoutUserInput], {
    nullable: true
  })
  create?: SubscriptionsOnPremisesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionsOnPremisesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionsOnPremisesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  set?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  delete?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;
}
