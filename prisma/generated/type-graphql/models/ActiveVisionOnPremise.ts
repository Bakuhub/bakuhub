import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Premise } from "../models/Premise";
import { Vision } from "../models/Vision";

@TypeGraphQL.ObjectType("ActiveVisionOnPremise", {
  isAbstract: true
})
export class ActiveVisionOnPremise {
  premise?: Premise;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  vision?: Vision;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  visionId!: string;
}
