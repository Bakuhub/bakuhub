import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReactionOnVisionsInput } from "../inputs/UserCreateOrConnectWithoutReactionOnVisionsInput";
import { UserCreateWithoutReactionOnVisionsInput } from "../inputs/UserCreateWithoutReactionOnVisionsInput";
import { UserUpdateWithoutReactionOnVisionsInput } from "../inputs/UserUpdateWithoutReactionOnVisionsInput";
import { UserUpsertWithoutReactionOnVisionsInput } from "../inputs/UserUpsertWithoutReactionOnVisionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReactionOnVisionsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutReactionOnVisionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnVisionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnVisionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReactionOnVisionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnVisionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutReactionOnVisionsInput | undefined;
}
