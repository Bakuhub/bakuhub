import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseUserIdPremiseIdCompoundUniqueInput } from "../inputs/VotesOnPremiseUserIdPremiseIdCompoundUniqueInput";

@TypeGraphQL.InputType("VotesOnPremiseWhereUniqueInput", {
  isAbstract: true
})
export class VotesOnPremiseWhereUniqueInput {
  @TypeGraphQL.Field(_type => VotesOnPremiseUserIdPremiseIdCompoundUniqueInput, {
    nullable: true
  })
  userId_premiseId?: VotesOnPremiseUserIdPremiseIdCompoundUniqueInput | undefined;
}
