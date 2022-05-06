import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Snapshot } from "../models/Snapshot";
import { Vision } from "../models/Vision";
import { ReferenceCount } from "../resolvers/outputs/ReferenceCount";

@TypeGraphQL.ObjectType("Reference", {
  isAbstract: true
})
export class Reference {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  snapshots?: Snapshot[];

  vision?: Vision[];

  @TypeGraphQL.Field(_type => ReferenceCount, {
    nullable: true
  })
  _count?: ReferenceCount | null;
}
