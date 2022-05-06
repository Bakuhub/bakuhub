import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutReactionOnVisionsInput } from "../inputs/VisionCreateWithoutReactionOnVisionsInput";
import { VisionUpdateWithoutReactionOnVisionsInput } from "../inputs/VisionUpdateWithoutReactionOnVisionsInput";

@TypeGraphQL.InputType("VisionUpsertWithoutReactionOnVisionsInput", {
  isAbstract: true
})
export class VisionUpsertWithoutReactionOnVisionsInput {
  @TypeGraphQL.Field(_type => VisionUpdateWithoutReactionOnVisionsInput, {
    nullable: false
  })
  update!: VisionUpdateWithoutReactionOnVisionsInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutReactionOnVisionsInput, {
    nullable: false
  })
  create!: VisionCreateWithoutReactionOnVisionsInput;
}
