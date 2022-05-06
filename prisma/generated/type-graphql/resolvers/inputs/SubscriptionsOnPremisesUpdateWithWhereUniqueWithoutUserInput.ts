import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesUpdateWithoutUserInput } from "../inputs/SubscriptionsOnPremisesUpdateWithoutUserInput";
import { SubscriptionsOnPremisesWhereUniqueInput } from "../inputs/SubscriptionsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SubscriptionsOnPremisesUpdateWithoutUserInput;
}
