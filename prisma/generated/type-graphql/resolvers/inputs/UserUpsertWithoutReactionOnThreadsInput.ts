import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReactionOnThreadsInput } from "../inputs/UserCreateWithoutReactionOnThreadsInput";
import { UserUpdateWithoutReactionOnThreadsInput } from "../inputs/UserUpdateWithoutReactionOnThreadsInput";

@TypeGraphQL.InputType("UserUpsertWithoutReactionOnThreadsInput", {
  isAbstract: true
})
export class UserUpsertWithoutReactionOnThreadsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnThreadsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReactionOnThreadsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnThreadsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReactionOnThreadsInput;
}
