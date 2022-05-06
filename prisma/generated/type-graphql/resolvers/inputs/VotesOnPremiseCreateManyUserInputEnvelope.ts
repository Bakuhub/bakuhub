import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateManyUserInput } from "../inputs/VotesOnPremiseCreateManyUserInput";

@TypeGraphQL.InputType("VotesOnPremiseCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class VotesOnPremiseCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateManyUserInput], {
    nullable: false
  })
  data!: VotesOnPremiseCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
