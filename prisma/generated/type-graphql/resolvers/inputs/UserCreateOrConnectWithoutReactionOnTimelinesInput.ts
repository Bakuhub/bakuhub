import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReactionOnTimelinesInput } from "../inputs/UserCreateWithoutReactionOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutReactionOnTimelinesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutReactionOnTimelinesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnTimelinesInput, {
    nullable: false
  })
  create!: UserCreateWithoutReactionOnTimelinesInput;
}
