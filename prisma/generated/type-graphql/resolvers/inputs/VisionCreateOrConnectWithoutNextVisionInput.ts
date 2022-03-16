import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutNextVisionInput } from "../inputs/VisionCreateWithoutNextVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutNextVisionInput", {
  isAbstract: true
})
export class VisionCreateOrConnectWithoutNextVisionInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionInput, {
    nullable: false
  })
  create!: VisionCreateWithoutNextVisionInput;
}
