import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVotesOnTimelineInput } from "../inputs/UserCreateWithoutVotesOnTimelineInput";
import { UserUpdateWithoutVotesOnTimelineInput } from "../inputs/UserUpdateWithoutVotesOnTimelineInput";

@TypeGraphQL.InputType("UserUpsertWithoutVotesOnTimelineInput", {
  isAbstract: true
})
export class UserUpsertWithoutVotesOnTimelineInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutVotesOnTimelineInput, {
    nullable: false
  })
  update!: UserUpdateWithoutVotesOnTimelineInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVotesOnTimelineInput, {
    nullable: false
  })
  create!: UserCreateWithoutVotesOnTimelineInput;
}
