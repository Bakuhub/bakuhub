import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutReferenceInput } from "../inputs/VisionCreateWithoutReferenceInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutReferenceInput", {
  isAbstract: true
})
export class VisionCreateOrConnectWithoutReferenceInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutReferenceInput, {
    nullable: false
  })
  create!: VisionCreateWithoutReferenceInput;
}
