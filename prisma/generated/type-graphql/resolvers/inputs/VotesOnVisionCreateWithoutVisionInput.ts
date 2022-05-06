import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutVotesOnVisionInput } from "../inputs/UserCreateNestedOneWithoutVotesOnVisionInput";

@TypeGraphQL.InputType("VotesOnVisionCreateWithoutVisionInput", {
  isAbstract: true
})
export class VotesOnVisionCreateWithoutVisionInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnVisionInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutVotesOnVisionInput;

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
