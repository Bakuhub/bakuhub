import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadScalarWhereInput } from "../inputs/VotesOnThreadScalarWhereInput";
import { VotesOnThreadUpdateManyMutationInput } from "../inputs/VotesOnThreadUpdateManyMutationInput";

@TypeGraphQL.InputType("VotesOnThreadUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class VotesOnThreadUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => VotesOnThreadScalarWhereInput, {
    nullable: false
  })
  where!: VotesOnThreadScalarWhereInput;

  @TypeGraphQL.Field(_type => VotesOnThreadUpdateManyMutationInput, {
    nullable: false
  })
  data!: VotesOnThreadUpdateManyMutationInput;
}
