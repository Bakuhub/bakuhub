import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyReferenceInputEnvelope } from "../inputs/VisionCreateManyReferenceInputEnvelope";
import { VisionCreateOrConnectWithoutReferenceInput } from "../inputs/VisionCreateOrConnectWithoutReferenceInput";
import { VisionCreateWithoutReferenceInput } from "../inputs/VisionCreateWithoutReferenceInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedManyWithoutReferenceInput", {
  isAbstract: true
})
export class VisionCreateNestedManyWithoutReferenceInput {
  @TypeGraphQL.Field(_type => [VisionCreateWithoutReferenceInput], {
    nullable: true
  })
  create?: VisionCreateWithoutReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutReferenceInput], {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutReferenceInput[] | undefined;

  @TypeGraphQL.Field(_type => VisionCreateManyReferenceInputEnvelope, {
    nullable: true
  })
  createMany?: VisionCreateManyReferenceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
    nullable: true
  })
  connect?: VisionWhereUniqueInput[] | undefined;
}
