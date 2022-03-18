import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ThreadsOnPremiseCreateManyPremiseInput } from "../inputs/ThreadsOnPremiseCreateManyPremiseInput";

@TypeGraphQL.InputType("ThreadsOnPremiseCreateManyPremiseInputEnvelope", {
  isAbstract: true
})
export class ThreadsOnPremiseCreateManyPremiseInputEnvelope {
  @TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateManyPremiseInput], {
    nullable: false
  })
  data!: ThreadsOnPremiseCreateManyPremiseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
