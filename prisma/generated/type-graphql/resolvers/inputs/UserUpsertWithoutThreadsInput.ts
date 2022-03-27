import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutThreadsInput } from "../inputs/UserCreateWithoutThreadsInput";
import { UserUpdateWithoutThreadsInput } from "../inputs/UserUpdateWithoutThreadsInput";

@TypeGraphQL.InputType("UserUpsertWithoutThreadsInput", {
  isAbstract: true
})
export class UserUpsertWithoutThreadsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutThreadsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutThreadsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutThreadsInput, {
    nullable: false
  })
  create!: UserCreateWithoutThreadsInput;
}
