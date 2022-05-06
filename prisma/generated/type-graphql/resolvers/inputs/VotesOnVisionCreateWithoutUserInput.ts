import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VisionCreateNestedOneWithoutVotesOnVisionInput } from "../inputs/VisionCreateNestedOneWithoutVotesOnVisionInput";

@TypeGraphQL.InputType("VotesOnVisionCreateWithoutUserInput", {
  isAbstract: true
})
export class VotesOnVisionCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutVotesOnVisionInput, {
    nullable: false
  })
  vision!: VisionCreateNestedOneWithoutVotesOnVisionInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  vote?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
