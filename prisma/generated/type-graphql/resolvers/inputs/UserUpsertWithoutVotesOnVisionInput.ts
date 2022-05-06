import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVotesOnVisionInput } from "../inputs/UserCreateWithoutVotesOnVisionInput";
import { UserUpdateWithoutVotesOnVisionInput } from "../inputs/UserUpdateWithoutVotesOnVisionInput";

@TypeGraphQL.InputType("UserUpsertWithoutVotesOnVisionInput", {
  isAbstract: true
})
export class UserUpsertWithoutVotesOnVisionInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnVisionInput, {
    nullable: false
  })
  update!: UserUpdateWithoutVotesOnVisionInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnVisionInput, {
    nullable: false
  })
  create!: UserCreateWithoutVotesOnVisionInput;
}
