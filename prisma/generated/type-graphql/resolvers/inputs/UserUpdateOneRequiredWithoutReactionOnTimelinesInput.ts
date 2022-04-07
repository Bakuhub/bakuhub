import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReactionOnTimelinesInput } from "../inputs/UserCreateOrConnectWithoutReactionOnTimelinesInput";
import { UserCreateWithoutReactionOnTimelinesInput } from "../inputs/UserCreateWithoutReactionOnTimelinesInput";
import { UserUpdateWithoutReactionOnTimelinesInput } from "../inputs/UserUpdateWithoutReactionOnTimelinesInput";
import { UserUpsertWithoutReactionOnTimelinesInput } from "../inputs/UserUpsertWithoutReactionOnTimelinesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReactionOnTimelinesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutReactionOnTimelinesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  create?: UserCreateWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReactionOnTimelinesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReactionOnTimelinesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutReactionOnTimelinesInput | undefined;
}
