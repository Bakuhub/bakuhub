import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesUpdateWithoutPremiseInput } from "../inputs/SubscriptionsOnPremisesUpdateWithoutPremiseInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateWithoutPremiseInput, {
    nullable: false
  })
  data!: SubscriptionsOnPremisesUpdateWithoutPremiseInput;
}
