import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVisionInput } from "../inputs/UserCreateWithoutVisionInput";
import { UserUpdateWithoutVisionInput } from "../inputs/UserUpdateWithoutVisionInput";

@TypeGraphQL.InputType("UserUpsertWithoutVisionInput", {
  isAbstract: true
})
export class UserUpsertWithoutVisionInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutVisionInput, {
    nullable: false
  })
  update!: UserUpdateWithoutVisionInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVisionInput, {
    nullable: false
  })
  create!: UserCreateWithoutVisionInput;
}
