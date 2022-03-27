import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotWhereInput } from "../inputs/SnapshotWhereInput";

@TypeGraphQL.InputType("SnapshotListRelationFilter", {
  isAbstract: true
})
export class SnapshotListRelationFilter {
  @TypeGraphQL.Field(_type => SnapshotWhereInput, {
    nullable: true
  })
  every?: SnapshotWhereInput | undefined;

  @TypeGraphQL.Field(_type => SnapshotWhereInput, {
    nullable: true
  })
  some?: SnapshotWhereInput | undefined;

  @TypeGraphQL.Field(_type => SnapshotWhereInput, {
    nullable: true
  })
  none?: SnapshotWhereInput | undefined;
}
