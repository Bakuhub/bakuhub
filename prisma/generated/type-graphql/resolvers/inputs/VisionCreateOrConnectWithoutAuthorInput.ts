import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutAuthorInput } from "../inputs/VisionCreateWithoutAuthorInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class VisionCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: VisionCreateWithoutAuthorInput;
}
