import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateManyPremiseInput", {
  isAbstract: true
})
export class PremisesOnTimelinesCreateManyPremiseInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  timelineId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
