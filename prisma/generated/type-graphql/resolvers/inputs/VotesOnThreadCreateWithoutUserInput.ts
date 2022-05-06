import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateNestedOneWithoutVotesOnThreadInput } from "../inputs/ThreadCreateNestedOneWithoutVotesOnThreadInput";

@TypeGraphQL.InputType("VotesOnThreadCreateWithoutUserInput", {
  isAbstract: true
})
export class VotesOnThreadCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutVotesOnThreadInput, {
    nullable: false
  })
  thread!: ThreadCreateNestedOneWithoutVotesOnThreadInput;

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
