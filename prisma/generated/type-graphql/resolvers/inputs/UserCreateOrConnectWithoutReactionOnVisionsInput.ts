import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReactionOnVisionsInput } from "../inputs/UserCreateWithoutReactionOnVisionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutReactionOnVisionsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutReactionOnVisionsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnVisionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReactionOnVisionsInput;
}
