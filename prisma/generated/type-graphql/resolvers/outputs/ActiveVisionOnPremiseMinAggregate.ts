import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ActiveVisionOnPremiseMinAggregate", {
  isAbstract: true
})
export class ActiveVisionOnPremiseMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  premiseId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visionId!: string | null;
}
