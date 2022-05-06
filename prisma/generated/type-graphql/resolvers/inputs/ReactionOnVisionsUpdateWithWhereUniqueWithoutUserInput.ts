import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsUpdateWithoutUserInput } from "../inputs/ReactionOnVisionsUpdateWithoutUserInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnVisionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ReactionOnVisionsUpdateWithoutUserInput;
}
