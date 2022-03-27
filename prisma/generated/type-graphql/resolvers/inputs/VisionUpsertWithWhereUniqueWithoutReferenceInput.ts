import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutReferenceInput } from "../inputs/VisionCreateWithoutReferenceInput";
import { VisionUpdateWithoutReferenceInput } from "../inputs/VisionUpdateWithoutReferenceInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpsertWithWhereUniqueWithoutReferenceInput", {
  isAbstract: true
})
export class VisionUpsertWithWhereUniqueWithoutReferenceInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionUpdateWithoutReferenceInput, {
    nullable: false
  })
  update!: VisionUpdateWithoutReferenceInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutReferenceInput, {
    nullable: false
  })
  create!: VisionCreateWithoutReferenceInput;
}
