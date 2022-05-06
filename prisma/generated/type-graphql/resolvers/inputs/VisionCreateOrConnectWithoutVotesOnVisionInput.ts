import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutVotesOnVisionInput } from "../inputs/VisionCreateWithoutVotesOnVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateOrConnectWithoutVotesOnVisionInput", {
  isAbstract: true
})
export class VisionCreateOrConnectWithoutVotesOnVisionInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutVotesOnVisionInput, {
    nullable: false
  })
  create!: VisionCreateWithoutVotesOnVisionInput;
}
