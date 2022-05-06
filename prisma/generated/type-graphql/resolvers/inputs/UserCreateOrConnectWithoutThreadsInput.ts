import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutThreadsInput } from "../inputs/UserCreateWithoutThreadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutThreadsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutThreadsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutThreadsInput, {
    nullable: false
  })
  create!: UserCreateWithoutThreadsInput;
}
