import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnapshotOrderByWithAggregationInput } from "../../../inputs/SnapshotOrderByWithAggregationInput";
import { SnapshotScalarWhereWithAggregatesInput } from "../../../inputs/SnapshotScalarWhereWithAggregatesInput";
import { SnapshotWhereInput } from "../../../inputs/SnapshotWhereInput";
import { SnapshotScalarFieldEnum } from "../../../../enums/SnapshotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySnapshotArgs {
  @TypeGraphQL.Field(_type => SnapshotWhereInput, {
    nullable: true
  })
  where?: SnapshotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SnapshotOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SnapshotOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "versionId" | "s3Url" | "sourceUrl" | "caption">;

  @TypeGraphQL.Field(_type => SnapshotScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SnapshotScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
