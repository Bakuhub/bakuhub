import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PremisesOnTimelinesMaxAggregate", {
  isAbstract: true
})
export class PremisesOnTimelinesMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  timelineId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  premiseId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt!: Date | null;
}
