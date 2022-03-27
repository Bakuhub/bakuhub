import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutNextVisionsInput } from "../inputs/VisionCreateWithoutNextVisionsInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutNextVisionsInput", {
  isAbstract: true
})
export class VisionCreateOrConnectWithoutNextVisionsInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutNextVisionsInput, {
    nullable: false
  })
  create!: VisionCreateWithoutNextVisionsInput;
}
