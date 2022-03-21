import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutThreadInput } from "../inputs/UserCreateWithoutThreadInput";
import { UserUpdateWithoutThreadInput } from "../inputs/UserUpdateWithoutThreadInput";

@TypeGraphQL.InputType("UserUpsertWithoutThreadInput", {
  isAbstract: true
})
export class UserUpsertWithoutThreadInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutThreadInput, {
    nullable: false
  })
  update!: UserUpdateWithoutThreadInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutThreadInput, {
    nullable: false
  })
  create!: UserCreateWithoutThreadInput;
}
