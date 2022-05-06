import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReactionOnThreadsInput } from "../inputs/UserCreateOrConnectWithoutReactionOnThreadsInput";
import { UserCreateWithoutReactionOnThreadsInput } from "../inputs/UserCreateWithoutReactionOnThreadsInput";
import { UserUpdateWithoutReactionOnThreadsInput } from "../inputs/UserUpdateWithoutReactionOnThreadsInput";
import { UserUpsertWithoutReactionOnThreadsInput } from "../inputs/UserUpsertWithoutReactionOnThreadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReactionOnThreadsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutReactionOnThreadsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnThreadsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnThreadsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReactionOnThreadsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReactionOnThreadsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnThreadsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutReactionOnThreadsInput | undefined;
}
