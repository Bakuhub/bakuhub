import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutVotesOnVisionInput } from "../inputs/VisionCreateWithoutVotesOnVisionInput";
import { VisionUpdateWithoutVotesOnVisionInput } from "../inputs/VisionUpdateWithoutVotesOnVisionInput";

@TypeGraphQL.InputType("VisionUpsertWithoutVotesOnVisionInput", {
  isAbstract: true
})
export class VisionUpsertWithoutVotesOnVisionInput {
  @TypeGraphQL.Field(_type => VisionUpdateWithoutVotesOnVisionInput, {
    nullable: false
  })
  update!: VisionUpdateWithoutVotesOnVisionInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutVotesOnVisionInput, {
    nullable: false
  })
  create!: VisionCreateWithoutVotesOnVisionInput;
}
