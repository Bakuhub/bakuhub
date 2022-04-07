import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateWithoutUserInput } from "../inputs/ReactionOnVisionsCreateWithoutUserInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnVisionsCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnVisionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReactionOnVisionsCreateWithoutUserInput;
}
