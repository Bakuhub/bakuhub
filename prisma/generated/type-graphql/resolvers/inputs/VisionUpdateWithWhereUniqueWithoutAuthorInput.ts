import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionUpdateWithoutAuthorInput } from "../inputs/VisionUpdateWithoutAuthorInput";
import { VisionWhereUniqueInput } from "../inputs/VisionWhereUniqueInput";

@TypeGraphQL.InputType("VisionUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class VisionUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => VisionWhereUniqueInput, {
    nullable: false
  })
  where!: VisionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VisionUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: VisionUpdateWithoutAuthorInput;
}
