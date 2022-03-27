import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateOrConnectWithoutNextVisionsInput } from "../inputs/VisionCreateOrConnectWithoutNextVisionsInput";
import { VisionCreateWithoutNextVisionsInput } from "../inputs/VisionCreateWithoutNextVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedOneWithoutNextVisionsInput", {
  isAbstract: true
})
export class VisionCreateNestedOneWithoutNextVisionsInput {
  @TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionsInput, {
    nullable: true
  })
  create?: VisionCreateWithoutNextVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutNextVisionsInput, {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutNextVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: true
  })
  connect?: VisionWhereUniqueInput | undefined;
}
