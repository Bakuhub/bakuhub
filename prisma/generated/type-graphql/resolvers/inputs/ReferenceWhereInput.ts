import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotListRelationFilter } from "../inputs/SnapshotListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VisionListRelationFilter } from "../inputs/VisionListRelationFilter";

@TypeGraphQL.InputType("ReferenceWhereInput", {
  isAbstract: true
})
export class ReferenceWhereInput {
  @TypeGraphQL.Field(_type => [ReferenceWhereInput], {
    nullable: true
  })
  AND?: ReferenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceWhereInput], {
    nullable: true
  })
  OR?: ReferenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceWhereInput], {
    nullable: true
  })
  NOT?: ReferenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SnapshotListRelationFilter, {
    nullable: true
  })
  snapshots?: SnapshotListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VisionListRelationFilter, {
    nullable: true
  })
  vision?: VisionListRelationFilter | undefined;
}
