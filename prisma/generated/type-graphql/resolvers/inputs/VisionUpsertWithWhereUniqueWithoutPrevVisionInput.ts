import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutPrevVisionInput } from "../inputs/VisionCreateWithoutPrevVisionInput";
import { VisionUpdateWithoutPrevVisionInput } from "../inputs/VisionUpdateWithoutPrevVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpsertWithWhereUniqueWithoutPrevVisionInput", {
  isAbstract: true
})
export class VisionUpsertWithWhereUniqueWithoutPrevVisionInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionUpdateWithoutPrevVisionInput, {
    nullable: false
  })
  update!: VisionUpdateWithoutPrevVisionInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutPrevVisionInput, {
    nullable: false
  })
  create!: VisionCreateWithoutPrevVisionInput;
}