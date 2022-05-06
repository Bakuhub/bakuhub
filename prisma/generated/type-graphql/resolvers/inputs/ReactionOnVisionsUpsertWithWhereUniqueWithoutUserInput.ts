import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateWithoutUserInput } from "../inputs/ReactionOnVisionsCreateWithoutUserInput";
import { ReactionOnVisionsUpdateWithoutUserInput } from "../inputs/ReactionOnVisionsUpdateWithoutUserInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnVisionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ReactionOnVisionsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReactionOnVisionsCreateWithoutUserInput;
}
