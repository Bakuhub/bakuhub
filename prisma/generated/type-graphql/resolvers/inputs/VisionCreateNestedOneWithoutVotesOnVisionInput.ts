import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateOrConnectWithoutVotesOnVisionInput } from "../inputs/VisionCreateOrConnectWithoutVotesOnVisionInput";
import { VisionCreateWithoutVotesOnVisionInput } from "../inputs/VisionCreateWithoutVotesOnVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedOneWithoutVotesOnVisionInput", {
  isAbstract: true
})
export class VisionCreateNestedOneWithoutVotesOnVisionInput {
  @TypeGraphQL.Field(_type => VisionCreateWithoutVotesOnVisionInput, {
    nullable: true
  })
  create?: VisionCreateWithoutVotesOnVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionCreateOrConnectWithoutVotesOnVisionInput, {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutVotesOnVisionInput | undefined;

  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: true
  })
  connect?: VisionWhereUniqueInput | undefined;
}
