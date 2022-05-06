import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PremiseCreateManyAuthorInput } from "../inputs/PremiseCreateManyAuthorInput";

@TypeGraphQL.InputType("PremiseCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class PremiseCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [PremiseCreateManyAuthorInput], {
    nullable: false
  })
  data!: PremiseCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
