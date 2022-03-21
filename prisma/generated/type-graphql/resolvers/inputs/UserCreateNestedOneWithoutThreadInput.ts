import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutThreadInput } from "../inputs/UserCreateOrConnectWithoutThreadInput";
import { UserCreateWithoutThreadInput } from "../inputs/UserCreateWithoutThreadInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutThreadInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutThreadInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutThreadInput, {
    nullable: true
  })
  create?: UserCreateWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutThreadInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutThreadInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
