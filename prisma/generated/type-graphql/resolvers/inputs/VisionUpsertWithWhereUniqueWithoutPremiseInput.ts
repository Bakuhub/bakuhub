import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateWithoutPremiseInput } from "../inputs/VisionCreateWithoutPremiseInput";
import { VisionUpdateWithoutPremiseInput } from "../inputs/VisionUpdateWithoutPremiseInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpsertWithWhereUniqueWithoutPremiseInput", {
  isAbstract: true
})
export class VisionUpsertWithWhereUniqueWithoutPremiseInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionUpdateWithoutPremiseInput, {
    nullable: false
  })
  update!: VisionUpdateWithoutPremiseInput;

  @TypeGraphQL.Field(_type => VisionCreateWithoutPremiseInput, {
    nullable: false
  })
  create!: VisionCreateWithoutPremiseInput;
}
