import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutNextVisionsInput } from "../inputs/VisionCreateWithoutNextVisionsInput";
import { VisionUpdateWithoutNextVisionsInput } from "../inputs/VisionUpdateWithoutNextVisionsInput";

@TypeGraphQL.InputType("VisionUpsertWithoutNextVisionsInput", {
  isAbstract: true
})
export class VisionUpsertWithoutNextVisionsInput {
  @TypeGraphQL.Field(_type => VisionUpdateWithoutNextVisionsInput, {
    nullable: false
  })
  update!: VisionUpdateWithoutNextVisionsInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionsInput, {
    nullable: false
  })
  create!: VisionCreateWithoutNextVisionsInput;
}
