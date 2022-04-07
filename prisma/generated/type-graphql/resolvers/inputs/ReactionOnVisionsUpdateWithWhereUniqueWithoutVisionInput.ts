import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsUpdateWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateWithoutVisionInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput", {
  isAbstract: true
})
export class ReactionOnVisionsUpdateWithWhereUniqueWithoutVisionInput {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnVisionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateWithoutVisionInput, {
    nullable: false
  })
  data!: ReactionOnVisionsUpdateWithoutVisionInput;
}
