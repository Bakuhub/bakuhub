import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsUserIdThreadIdCompoundUniqueInput } from "../inputs/ReactionOnThreadsUserIdThreadIdCompoundUniqueInput";

@TypeGraphQL.InputType("ReactionOnThreadsWhereUniqueInput", {
  isAbstract: true
})
export class ReactionOnThreadsWhereUniqueInput {
  @TypeGraphQL.Field(_type => ReactionOnThreadsUserIdThreadIdCompoundUniqueInput, {
    nullable: true
  })
  userId_threadId?: ReactionOnThreadsUserIdThreadIdCompoundUniqueInput | undefined;
}
