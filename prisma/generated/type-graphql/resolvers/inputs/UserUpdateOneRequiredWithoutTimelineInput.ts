import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTimelineInput } from "../inputs/UserCreateOrConnectWithoutTimelineInput";
import { UserCreateWithoutTimelineInput } from "../inputs/UserCreateWithoutTimelineInput";
import { UserUpdateWithoutTimelineInput } from "../inputs/UserUpdateWithoutTimelineInput";
import { UserUpsertWithoutTimelineInput } from "../inputs/UserUpsertWithoutTimelineInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTimelineInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTimelineInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTimelineInput, {
    nullable: true
  })
  create?: UserCreateWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTimelineInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTimelineInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTimelineInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTimelineInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTimelineInput | undefined;
}
