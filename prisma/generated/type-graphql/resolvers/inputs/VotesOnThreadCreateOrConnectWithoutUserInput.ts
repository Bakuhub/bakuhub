import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadCreateWithoutUserInput } from "../inputs/VotesOnThreadCreateWithoutUserInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class VotesOnThreadCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnThreadCreateWithoutUserInput, {
    nullable: false
  })
  create!: VotesOnThreadCreateWithoutUserInput;
}
