import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ThreadsOnVisionMinAggregate", {
  isAbstract: true
})
export class ThreadsOnVisionMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  threadId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visionId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt!: Date | null;
}
