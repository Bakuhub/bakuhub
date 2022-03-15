import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutActiveVisionOnPremiseInput } from "../inputs/VisionCreateWithoutActiveVisionOnPremiseInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutActiveVisionOnPremiseInput", {
  isAbstract: true
})
export class VisionCreateOrConnectWithoutActiveVisionOnPremiseInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutActiveVisionOnPremiseInput, {
    nullable: false
  })
  create!: VisionCreateWithoutActiveVisionOnPremiseInput;
}
