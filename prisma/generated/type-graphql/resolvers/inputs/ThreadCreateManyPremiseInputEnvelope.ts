import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadCreateManyPremiseInput } from "../inputs/ThreadCreateManyPremiseInput";

@TypeGraphQL.InputType("ThreadCreateManyPremiseInputEnvelope", {
  isAbstract: true
})
export class ThreadCreateManyPremiseInputEnvelope {
  @TypeGraphQL.Field(_type => [ThreadCreateManyPremiseInput], {
    nullable: false
  })
  data!: ThreadCreateManyPremiseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
