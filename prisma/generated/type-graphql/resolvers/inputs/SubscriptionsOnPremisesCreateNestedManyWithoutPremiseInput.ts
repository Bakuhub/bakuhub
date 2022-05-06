import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateManyPremiseInputEnvelope } from "../inputs/SubscriptionsOnPremisesCreateManyPremiseInputEnvelope";
import { SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput";
import { SubscriptionsOnPremisesCreateWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesCreateNestedManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: SubscriptionsOnPremisesCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionsOnPremisesCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionsOnPremisesCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionsOnPremisesWhereUniqueInput[] | undefined;
}
