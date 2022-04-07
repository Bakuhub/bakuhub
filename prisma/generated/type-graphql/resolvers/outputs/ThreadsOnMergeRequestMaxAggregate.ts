import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ThreadsOnMergeRequestMaxAggregate", {
  isAbstract: true
})
export class ThreadsOnMergeRequestMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  threadId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mergeRequestId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  assignedAt!: Date | null;
}
