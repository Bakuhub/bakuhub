import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesCreateWithoutUserInput } from "../inputs/SubscriptionsOnPremisesCreateWithoutUserInput";
import { SubscriptionsOnPremisesUpdateWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpdateWithoutUserInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SubscriptionsOnPremisesUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateWithoutUserInput, {
    nullable: false
  })
  create!: SubscriptionsOnPremisesCreateWithoutUserInput;
}
