import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateManyUserInputEnvelope } from "../inputs/SubscriptionsOnPremisesCreateManyUserInputEnvelope";
import { SubscriptionsOnPremisesCreateOrConnectWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutUserInput";
import { SubscriptionsOnPremisesCreateWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutUserInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateWithoutUserInput], {
    nullable: true
  })
  create?: SubscriptionsOnPremisesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionsOnPremisesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionsOnPremisesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
}
