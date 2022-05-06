import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVotesOnTimelineInput } from "../inputs/UserCreateOrConnectWithoutVotesOnTimelineInput";
import { UserCreateWithoutVotesOnTimelineInput } from "../inputs/UserCreateWithoutVotesOnTimelineInput";
import { UserUpdateWithoutVotesOnTimelineInput } from "../inputs/UserUpdateWithoutVotesOnTimelineInput";
import { UserUpsertWithoutVotesOnTimelineInput } from "../inputs/UserUpsertWithoutVotesOnTimelineInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutVotesOnTimelineInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutVotesOnTimelineInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnTimelineInput, {
    nullable: true
  })
  create?: UserCreateWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnTimelineInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutVotesOnTimelineInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnTimelineInput, {
    nullable: true
  })
  update?: UserUpdateWithoutVotesOnTimelineInput | undefined;
}
