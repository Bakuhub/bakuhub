import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionOnThreadsScalarWhereInput } from "../inputs/ReactionOnThreadsScalarWhereInput";
import { ReactionOnThreadsUpdateManyMutationInput } from "../inputs/ReactionOnThreadsUpdateManyMutationInput";

@TypeGraphQL.InputType("ReactionOnThreadsUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ReactionOnThreadsUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ReactionOnThreadsScalarWhereInput, {
    nullable: false
  })
  where!: ReactionOnThreadsScalarWhereInput;

  @TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReactionOnThreadsUpdateManyMutationInput;
}
