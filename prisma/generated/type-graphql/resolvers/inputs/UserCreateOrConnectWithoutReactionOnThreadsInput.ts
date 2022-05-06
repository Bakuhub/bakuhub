import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReactionOnThreadsInput } from "../inputs/UserCreateWithoutReactionOnThreadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutReactionOnThreadsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutReactionOnThreadsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnThreadsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReactionOnThreadsInput;
}
