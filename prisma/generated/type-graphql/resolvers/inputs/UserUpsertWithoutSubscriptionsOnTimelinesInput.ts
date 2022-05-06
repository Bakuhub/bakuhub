import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserCreateWithoutSubscriptionsOnTimelinesInput";
import { UserUpdateWithoutSubscriptionsOnTimelinesInput } from "../inputs/UserUpdateWithoutSubscriptionsOnTimelinesInput";

@TypeGraphQL.InputType("UserUpsertWithoutSubscriptionsOnTimelinesInput", {
  isAbstract: true
})
export class UserUpsertWithoutSubscriptionsOnTimelinesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionsOnTimelinesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSubscriptionsOnTimelinesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionsOnTimelinesInput, {
    nullable: false
  })
  create!: UserCreateWithoutSubscriptionsOnTimelinesInput;
}
