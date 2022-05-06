import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReactionOnVisionsInput } from "../inputs/UserCreateOrConnectWithoutReactionOnVisionsInput";
import { UserCreateWithoutReactionOnVisionsInput } from "../inputs/UserCreateWithoutReactionOnVisionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutReactionOnVisionsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutReactionOnVisionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnVisionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnVisionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
