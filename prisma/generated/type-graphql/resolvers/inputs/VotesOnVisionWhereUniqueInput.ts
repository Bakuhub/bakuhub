import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnVisionUserIdVisionIdCompoundUniqueInput } from "../inputs/VotesOnVisionUserIdVisionIdCompoundUniqueInput";

@TypeGraphQL.InputType("VotesOnVisionWhereUniqueInput", {
  isAbstract: true
})
export class VotesOnVisionWhereUniqueInput {
  @TypeGraphQL.Field(_type => VotesOnVisionUserIdVisionIdCompoundUniqueInput, {
    nullable: true
  })
  userId_visionId?: VotesOnVisionUserIdVisionIdCompoundUniqueInput | undefined;
}
