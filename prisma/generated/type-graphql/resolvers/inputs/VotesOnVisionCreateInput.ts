import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutVotesOnVisionInput } from "../inputs/UserCreateNestedOneWithoutVotesOnVisionInput";
import { VisionCreateNestedOneWithoutVotesOnVisionInput } from "../inputs/VisionCreateNestedOneWithoutVotesOnVisionInput";

@TypeGraphQL.InputType("VotesOnVisionCreateInput", {
  isAbstract: true
})
export class VotesOnVisionCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnVisionInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutVotesOnVisionInput;

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
