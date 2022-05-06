import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateManyPremiseInputEnvelope } from "../inputs/VisionCreateManyPremiseInputEnvelope";
import { VisionCreateOrConnectWithoutPremiseInput } from "../inputs/VisionCreateOrConnectWithoutPremiseInput";
import { VisionCreateWithoutPremiseInput } from "../inputs/VisionCreateWithoutPremiseInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionCreateNestedManyWithoutPremiseInput", {
  isAbstract: true
})
export class VisionCreateNestedManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [VisionCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: VisionCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: VisionCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => VisionCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: VisionCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VisionWhereUniqueInput], {
    nullable: true
  })
  connect?: VisionWhereUniqueInput[] | undefined;
}
