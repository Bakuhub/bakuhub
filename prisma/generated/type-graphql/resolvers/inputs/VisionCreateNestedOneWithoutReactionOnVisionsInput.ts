import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateOrConnectWithoutReactionOnVisionsInput } from "../inputs/VisionCreateOrConnectWithoutReactionOnVisionsInput";
import { VisionCreateWithoutReactionOnVisionsInput } from "../inputs/VisionCreateWithoutReactionOnVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedOneWithoutReactionOnVisionsInput", {
  isAbstract: true
})
export class VisionCreateNestedOneWithoutReactionOnVisionsInput {
  @TypeGraphQL.Field(_type => VisionCreateWithoutReactionOnVisionsInput, {
    nullable: true
  })
  create?: VisionCreateWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutReactionOnVisionsInput, {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutReactionOnVisionsInput | undefined;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: true
  })
  connect?: VisionWhereUniqueInput | undefined;
}
