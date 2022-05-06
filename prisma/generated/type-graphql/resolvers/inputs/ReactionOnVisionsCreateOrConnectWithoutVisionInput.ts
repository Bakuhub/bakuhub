import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateWithoutVisionInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsCreateOrConnectWithoutVisionInput", {
  isAbstract: true
})
export class ReactionOnVisionsCreateOrConnectWithoutVisionInput {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnVisionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateWithoutVisionInput, {
    nullable: false
  })
  create!: ReactionOnVisionsCreateWithoutVisionInput;
}
