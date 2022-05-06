import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSubscriptionsOnPremisesInput } from "../inputs/UserCreateWithoutSubscriptionsOnPremisesInput";
import { UserUpdateWithoutSubscriptionsOnPremisesInput } from "../inputs/UserUpdateWithoutSubscriptionsOnPremisesInput";

@TypeGraphQL.InputType("UserUpsertWithoutSubscriptionsOnPremisesInput", {
  isAbstract: true
})
export class UserUpsertWithoutSubscriptionsOnPremisesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsOnPremisesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSubscriptionsOnPremisesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnPremisesInput, {
    nullable: false
  })
  create!: UserCreateWithoutSubscriptionsOnPremisesInput;
}
