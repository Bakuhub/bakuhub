import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyAuthorInputEnvelope } from "../inputs/VisionCreateManyAuthorInputEnvelope";
import { VisionCreateOrConnectWithoutAuthorInput } from "../inputs/VisionCreateOrConnectWithoutAuthorInput";
import { VisionCreateWithoutAuthorInput } from "../inputs/VisionCreateWithoutAuthorInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class VisionCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [VisionCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: VisionCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => VisionCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: VisionCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
    nullable: true
  })
  connect?: VisionWhereUniqueInput[] | undefined;
}
