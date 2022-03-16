import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateOrConnectWithoutNextVisionInput } from "../inputs/VisionCreateOrConnectWithoutNextVisionInput";
import { VisionCreateWithoutNextVisionInput } from "../inputs/VisionCreateWithoutNextVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedOneWithoutNextVisionInput", {
  isAbstract: true
})
export class VisionCreateNestedOneWithoutNextVisionInput {
  @TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionInput, {
    nullable: true
  })
  create?: VisionCreateWithoutNextVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutNextVisionInput, {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutNextVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: true
  })
  connect?: VisionWhereUniqueInput | undefined;
}
