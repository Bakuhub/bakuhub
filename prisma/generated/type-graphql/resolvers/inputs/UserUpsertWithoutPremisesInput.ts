import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPremisesInput } from "../inputs/UserCreateWithoutPremisesInput";
import { UserUpdateWithoutPremisesInput } from "../inputs/UserUpdateWithoutPremisesInput";

@TypeGraphQL.InputType("UserUpsertWithoutPremisesInput", {
  isAbstract: true
})
export class UserUpsertWithoutPremisesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPremisesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPremisesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPremisesInput, {
    nullable: false
  })
  create!: UserCreateWithoutPremisesInput;
}
