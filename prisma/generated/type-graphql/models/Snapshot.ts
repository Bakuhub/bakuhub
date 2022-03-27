import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Reference } from "../models/Reference";
import { SnapshotCount } from "../resolvers/outputs/SnapshotCount";

@TypeGraphQL.ObjectType("Snapshot", {
  isAbstract: true
})
export class Snapshot {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  versionId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  s3Url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sourceUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  caption!: string;

  references?: Reference[];

  @TypeGraphQL.Field(_type => SnapshotCount, {
    nullable: true
  })
  _count?: SnapshotCount | null;
}
