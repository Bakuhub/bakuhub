import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutPrevVisionInput } from "../inputs/VisionCreateWithoutPrevVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutPrevVisionInput", {
  isAbstract: true
})
export class VisionCreateOrConnectWithoutPrevVisionInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutPrevVisionInput, {
    nullable: false
  })
  create!: VisionCreateWithoutPrevVisionInput;
}
