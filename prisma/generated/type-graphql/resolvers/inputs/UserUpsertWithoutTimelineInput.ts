import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTimelineInput } from "../inputs/UserCreateWithoutTimelineInput";
import { UserUpdateWithoutTimelineInput } from "../inputs/UserUpdateWithoutTimelineInput";

@TypeGraphQL.InputType("UserUpsertWithoutTimelineInput", {
  isAbstract: true
})
export class UserUpsertWithoutTimelineInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTimelineInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTimelineInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTimelineInput, {
    nullable: false
  })
  create!: UserCreateWithoutTimelineInput;
}
