import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutVotesOnThreadInput } from "../inputs/UserCreateNestedOneWithoutVotesOnThreadInput";

@TypeGraphQL.InputType("VotesOnThreadCreateWithoutThreadInput", {
  isAbstract: true
})
export class VotesOnThreadCreateWithoutThreadInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnThreadInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutVotesOnThreadInput;

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
