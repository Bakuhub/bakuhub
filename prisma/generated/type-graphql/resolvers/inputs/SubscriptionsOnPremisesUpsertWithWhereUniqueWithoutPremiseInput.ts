import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutPremiseInput";
import { SubscriptionsOnPremisesUpdateWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpdateWithoutPremiseInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateWithoutPremiseInput, {
    nullable: false
  })
  update!: SubscriptionsOnPremisesUpdateWithoutPremiseInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: SubscriptionsOnPremisesCreateWithoutPremiseInput;
}
