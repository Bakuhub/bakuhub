import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SnapshotMinAggregate", {
  isAbstract: true
})
export class SnapshotMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  versionId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sourceUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  caption!: string | null;
}
