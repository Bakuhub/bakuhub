import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadUpdateWithoutThreadInput } from "../inputs/VotesOnThreadUpdateWithoutThreadInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput", {
  isAbstract: true
})
export class VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnThreadUpdateWithoutThreadInput, {
    nullable: false
  })
  data!: VotesOnThreadUpdateWithoutThreadInput;
}
