import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVotesOnThreadInput } from "../inputs/UserCreateWithoutVotesOnThreadInput";
import { UserUpdateWithoutVotesOnThreadInput } from "../inputs/UserUpdateWithoutVotesOnThreadInput";

@TypeGraphQL.InputType("UserUpsertWithoutVotesOnThreadInput", {
  isAbstract: true
})
export class UserUpsertWithoutVotesOnThreadInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnThreadInput, {
    nullable: false
  })
  update!: UserUpdateWithoutVotesOnThreadInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnThreadInput, {
    nullable: false
  })
  create!: UserCreateWithoutVotesOnThreadInput;
}
