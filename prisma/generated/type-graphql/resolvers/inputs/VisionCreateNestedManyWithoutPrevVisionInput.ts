import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyPrevVisionInputEnvelope } from "../inputs/VisionCreateManyPrevVisionInputEnvelope";
import { VisionCreateOrConnectWithoutPrevVisionInput } from "../inputs/VisionCreateOrConnectWithoutPrevVisionInput";
import { VisionCreateWithoutPrevVisionInput } from "../inputs/VisionCreateWithoutPrevVisionInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedManyWithoutPrevVisionInput", {
  isAbstract: true
})
export class VisionCreateNestedManyWithoutPrevVisionInput {
  @TypeGraphQL.Field(_type => [VisionCreateWithoutPrevVisionInput], {
    nullable: true
  })
  create?: VisionCreateWithoutPrevVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPrevVisionInput], {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutPrevVisionInput[] | undefined;

  @TypeGraphQL.Field(_type => VisionCreateManyPrevVisionInputEnvelope, {
    nullable: true
  })
  createMany?: VisionCreateManyPrevVisionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
    nullable: true
  })
  connect?: VisionWhereUniqueInput[] | undefined;
}
