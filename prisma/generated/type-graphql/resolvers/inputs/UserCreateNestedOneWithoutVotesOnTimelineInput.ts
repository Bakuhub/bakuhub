import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVotesOnTimelineInput } from "../inputs/UserCreateOrConnectWithoutVotesOnTimelineInput";
import { UserCreateWithoutVotesOnTimelineInput } from "../inputs/UserCreateWithoutVotesOnTimelineInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutVotesOnTimelineInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutVotesOnTimelineInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnTimelineInput, {
    nullable: true
  })
  create?: UserCreateWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVotesOnTimelineInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVotesOnTimelineInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
