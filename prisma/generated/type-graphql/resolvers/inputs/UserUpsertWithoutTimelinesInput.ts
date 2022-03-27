import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTimelinesInput } from "../inputs/UserCreateWithoutTimelinesInput";
import { UserUpdateWithoutTimelinesInput } from "../inputs/UserUpdateWithoutTimelinesInput";

@TypeGraphQL.InputType("UserUpsertWithoutTimelinesInput", {
  isAbstract: true
})
export class UserUpsertWithoutTimelinesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTimelinesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTimelinesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTimelinesInput, {
    nullable: false
  })
  create!: UserCreateWithoutTimelinesInput;
}
