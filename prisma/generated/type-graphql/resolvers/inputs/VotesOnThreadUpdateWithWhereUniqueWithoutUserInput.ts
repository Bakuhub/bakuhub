import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadUpdateWithoutUserInput } from "../inputs/VotesOnThreadUpdateWithoutUserInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class VotesOnThreadUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnThreadUpdateWithoutUserInput, {
    nullable: false
  })
  data!: VotesOnThreadUpdateWithoutUserInput;
}
