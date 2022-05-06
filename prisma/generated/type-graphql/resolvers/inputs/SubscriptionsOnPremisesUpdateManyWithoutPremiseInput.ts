import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateManyPremiseInputEnvelope } from "../inputs/SubscriptionsOnPremisesCreateManyPremiseInputEnvelope";
import { SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput";
import { SubscriptionsOnPremisesCreateWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput";
import { SubscriptionsOnPremisesScalarWhereInput } from "../inputs/SubscriptionsOnPremisesScalarWhereInput";
import { SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput";
import { SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput";
import { SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateManyWithoutPremiseInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesUpdateManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: SubscriptionsOnPremisesCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  upsert?: SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionsOnPremisesCreateManyPremiseInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  update?: SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput], {
    nullable: true
  })
  updateMany?: SubscriptionsOnPremisesUpdateManyWithWhereWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubscriptionsOnPremisesScalarWhereInput[] | undefined;
}
