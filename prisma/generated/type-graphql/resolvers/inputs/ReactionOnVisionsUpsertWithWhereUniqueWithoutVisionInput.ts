import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsCreateWithoutVisionInput } from "../inputs/ReactionOnVisionsCreateWithoutVisionInput";
import { ReactionOnVisionsUpdateWithoutVisionInput } from "../inputs/ReactionOnVisionsUpdateWithoutVisionInput";
import { ReactionOnVisionsWhereUniqueInput } from "../inputs/ReactionOnVisionsWhereUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput", {
  isAbstract: true
})
export class ReactionOnVisionsUpsertWithWhereUniqueWithoutVisionInput {
  @TypeGraphQL.Field(_type => ReactionOnVisionsWhereUniqueInput, {
    nullable: false
  })
  where!: ReactionOnVisionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsUpdateWithoutVisionInput, {
    nullable: false
  })
  update!: ReactionOnVisionsUpdateWithoutVisionInput;

  @TypeGraphQL.Field(_type => ReactionOnVisionsCreateWithoutVisionInput, {
    nullable: false
  })
  create!: ReactionOnVisionsCreateWithoutVisionInput;
}
