import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadUserIdThreadIdCompoundUniqueInput } from "../inputs/VotesOnThreadUserIdThreadIdCompoundUniqueInput";

@TypeGraphQL.InputType("VotesOnThreadWhereUniqueInput", {
  isAbstract: true
})
export class VotesOnThreadWhereUniqueInput {
  @TypeGraphQL.Field(_type => VotesOnThreadUserIdThreadIdCompoundUniqueInput, {
    nullable: true
  })
  userId_threadId?: VotesOnThreadUserIdThreadIdCompoundUniqueInput | undefined;
}
