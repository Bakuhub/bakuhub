import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutReactionOnVisionsInput } from "../inputs/VisionCreateWithoutReactionOnVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutReactionOnVisionsInput", {
  isAbstract: true
})
export class VisionCreateOrConnectWithoutReactionOnVisionsInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutReactionOnVisionsInput, {
    nullable: false
  })
  create!: VisionCreateWithoutReactionOnVisionsInput;
}
