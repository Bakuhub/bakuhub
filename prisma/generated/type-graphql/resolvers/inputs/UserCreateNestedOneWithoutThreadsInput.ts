import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutThreadsInput } from "../inputs/UserCreateOrConnectWithoutThreadsInput";
import { UserCreateWithoutThreadsInput } from "../inputs/UserCreateWithoutThreadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutThreadsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutThreadsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutThreadsInput, {
    nullable: true
  })
  create?: UserCreateWithoutThreadsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutThreadsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutThreadsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
