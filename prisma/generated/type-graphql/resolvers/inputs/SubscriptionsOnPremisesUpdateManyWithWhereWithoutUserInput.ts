import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionsOnPremisesScalarWhereInput } from "../inputs/SubscriptionsOnPremisesScalarWhereInput";
import { SubscriptionsOnPremisesUpdateManyMutationInput } from "../inputs/SubscriptionsOnPremisesUpdateManyMutationInput";

@TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class SubscriptionsOnPremisesUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesScalarWhereInput, {
    nullable: false
  })
  where!: SubscriptionsOnPremisesScalarWhereInput;

  @TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubscriptionsOnPremisesUpdateManyMutationInput;
}
