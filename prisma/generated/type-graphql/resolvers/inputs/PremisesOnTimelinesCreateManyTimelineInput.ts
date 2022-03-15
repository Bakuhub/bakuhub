import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateManyTimelineInput", {
  isAbstract: true
})
export class PremisesOnTimelinesCreateManyTimelineInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt?: Date | undefined;
}
