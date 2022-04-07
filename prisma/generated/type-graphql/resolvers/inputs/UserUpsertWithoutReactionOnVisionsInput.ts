import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReactionOnVisionsInput } from "../inputs/UserCreateWithoutReactionOnVisionsInput";
import { UserUpdateWithoutReactionOnVisionsInput } from "../inputs/UserUpdateWithoutReactionOnVisionsInput";

@TypeGraphQL.InputType("UserUpsertWithoutReactionOnVisionsInput", {
  isAbstract: true
})
export class UserUpsertWithoutReactionOnVisionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnVisionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReactionOnVisionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnVisionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReactionOnVisionsInput;
}
