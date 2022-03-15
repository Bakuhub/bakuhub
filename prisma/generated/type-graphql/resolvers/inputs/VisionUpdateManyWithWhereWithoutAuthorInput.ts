import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionScalarWhereInput } from "../inputs/VisionScalarWhereInput";
import { VisionUpdateManyMutationInput } from "../inputs/VisionUpdateManyMutationInput";

@TypeGraphQL.InputType("VisionUpdateManyWithWhereWithoutAuthorInput", {
  isAbstract: true
})
export class VisionUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => VisionScalarWhereInput, {
    nullable: false
  })
  where!: VisionScalarWhereInput;

  @TypeGraphQL.Field(_type => VisionUpdateManyMutationInput, {
    nullable: false
  })
  data!: VisionUpdateManyMutationInput;
}
