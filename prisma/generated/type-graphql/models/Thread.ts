import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Premise } from "../models/Premise";
import { ThreadCount } from "../resolvers/outputs/ThreadCount";

@TypeGraphQL.ObjectType("Thread", {
  isAbstract: true
})
export class Thread {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  activityDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reference!: string;

  premise?: Premise;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  premiseId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentThreadId?: string | null;

  parentThread?: Thread | null;

  childThreads?: Thread[];

  @TypeGraphQL.Field(_type => ThreadCount, {
    nullable: true
  })
  _count?: ThreadCount | null;
}
