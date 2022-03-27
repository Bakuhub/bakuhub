import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SnapshotCreateManyInput", {
  isAbstract: true
})
export class SnapshotCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

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
}
