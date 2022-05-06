import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionUpdateWithoutReferenceInput } from "../inputs/VisionUpdateWithoutReferenceInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateWithWhereUniqueWithoutReferenceInput", {
  isAbstract: true
})
export class VisionUpdateWithWhereUniqueWithoutReferenceInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionUpdateWithoutReferenceInput, {
    nullable: false
  })
  data!: VisionUpdateWithoutReferenceInput;
}
