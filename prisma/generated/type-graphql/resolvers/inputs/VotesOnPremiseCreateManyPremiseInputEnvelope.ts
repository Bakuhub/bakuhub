import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnPremiseCreateManyPremiseInput } from "../inputs/VotesOnPremiseCreateManyPremiseInput";

@TypeGraphQL.InputType("VotesOnPremiseCreateManyPremiseInputEnvelope", {
  isAbstract: true
})
export class VotesOnPremiseCreateManyPremiseInputEnvelope {
  @TypeGraphQL.Field(_type => [VotesOnPremiseCreateManyPremiseInput], {
    nullable: false
  })
  data!: VotesOnPremiseCreateManyPremiseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
