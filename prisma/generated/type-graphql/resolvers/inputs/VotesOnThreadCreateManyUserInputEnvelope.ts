import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VotesOnThreadCreateManyUserInput } from "../inputs/VotesOnThreadCreateManyUserInput";

@TypeGraphQL.InputType("VotesOnThreadCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class VotesOnThreadCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [VotesOnThreadCreateManyUserInput], {
    nullable: false
  })
  data!: VotesOnThreadCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
