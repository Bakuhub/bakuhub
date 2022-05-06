import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadScalarWhereInput } from "../inputs/VotesOnThreadScalarWhereInput";
import { VotesOnThreadUpdateManyMutationInput } from "../inputs/VotesOnThreadUpdateManyMutationInput";

@TypeGraphQL.InputType("VotesOnThreadUpdateManyWithWhereWithoutThreadInput", {
  isAbstract: true
})
export class VotesOnThreadUpdateManyWithWhereWithoutThreadInput {
  @TypeGraphQL.Field(_type => VotesOnThreadScalarWhereInput, {
    nullable: false
  })
  where!: VotesOnThreadScalarWhereInput;

  @TypeGraphQL.Field(_type => VotesOnThreadUpdateManyMutationInput, {
    nullable: false
  })
  data!: VotesOnThreadUpdateManyMutationInput;
}
