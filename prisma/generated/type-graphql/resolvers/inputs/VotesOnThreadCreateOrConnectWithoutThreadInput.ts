import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadCreateWithoutThreadInput } from "../inputs/VotesOnThreadCreateWithoutThreadInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadCreateOrConnectWithoutThreadInput", {
  isAbstract: true
})
export class VotesOnThreadCreateOrConnectWithoutThreadInput {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnThreadCreateWithoutThreadInput, {
    nullable: false
  })
  create!: VotesOnThreadCreateWithoutThreadInput;
}
