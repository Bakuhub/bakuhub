import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadCreateWithoutThreadInput } from "../inputs/VotesOnThreadCreateWithoutThreadInput";
import { VotesOnThreadUpdateWithoutThreadInput } from "../inputs/VotesOnThreadUpdateWithoutThreadInput";
import { VotesOnThreadWhereUniqueInput } from "../inputs/VotesOnThreadWhereUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput", {
  isAbstract: true
})
export class VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput {
  @TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput, {
    nullable: false
  })
  where!: VotesOnThreadWhereUniqueInput;

  @TypeGraphQL.Field(_type => VotesOnThreadUpdateWithoutThreadInput, {
    nullable: false
  })
  update!: VotesOnThreadUpdateWithoutThreadInput;

  @TypeGraphQL.Field(_type => VotesOnThreadCreateWithoutThreadInput, {
    nullable: false
  })
  create!: VotesOnThreadCreateWithoutThreadInput;
}
