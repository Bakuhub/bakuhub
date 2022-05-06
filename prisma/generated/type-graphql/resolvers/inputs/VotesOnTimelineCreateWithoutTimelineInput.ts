import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutVotesOnTimelineInput } from "../inputs/UserCreateNestedOneWithoutVotesOnTimelineInput";

@TypeGraphQL.InputType("VotesOnTimelineCreateWithoutTimelineInput", {
  isAbstract: true
})
export class VotesOnTimelineCreateWithoutTimelineInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnTimelineInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutVotesOnTimelineInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  vote?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
