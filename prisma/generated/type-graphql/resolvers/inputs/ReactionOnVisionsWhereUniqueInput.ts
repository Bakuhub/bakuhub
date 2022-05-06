import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnVisionsUserIdVisionIdCompoundUniqueInput } from "../inputs/ReactionOnVisionsUserIdVisionIdCompoundUniqueInput";

@TypeGraphQL.InputType("ReactionOnVisionsWhereUniqueInput", {
  isAbstract: true
})
export class ReactionOnVisionsWhereUniqueInput {
  @TypeGraphQL.Field(_type => ReactionOnVisionsUserIdVisionIdCompoundUniqueInput, {
    nullable: true
  })
  userId_visionId?: ReactionOnVisionsUserIdVisionIdCompoundUniqueInput | undefined;
}
