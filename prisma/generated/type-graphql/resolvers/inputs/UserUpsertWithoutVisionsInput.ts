import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVisionsInput } from "../inputs/UserCreateWithoutVisionsInput";
import { UserUpdateWithoutVisionsInput } from "../inputs/UserUpdateWithoutVisionsInput";

@TypeGraphQL.InputType("UserUpsertWithoutVisionsInput", {
  isAbstract: true
})
export class UserUpsertWithoutVisionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutVisionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutVisionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVisionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutVisionsInput;
}
