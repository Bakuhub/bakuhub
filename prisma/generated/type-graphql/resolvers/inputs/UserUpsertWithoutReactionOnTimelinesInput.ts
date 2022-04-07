import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReactionOnTimelinesInput } from "../inputs/UserCreateWithoutReactionOnTimelinesInput";
import { UserUpdateWithoutReactionOnTimelinesInput } from "../inputs/UserUpdateWithoutReactionOnTimelinesInput";

@TypeGraphQL.InputType("UserUpsertWithoutReactionOnTimelinesInput", {
  isAbstract: true
})
export class UserUpsertWithoutReactionOnTimelinesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnTimelinesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReactionOnTimelinesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnTimelinesInput, {
    nullable: false
  })
  create!: UserCreateWithoutReactionOnTimelinesInput;
}
