import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnapshotOrderByWithRelationInput } from "../../../inputs/SnapshotOrderByWithRelationInput";
import { SnapshotWhereInput } from "../../../inputs/SnapshotWhereInput";
import { SnapshotWhereUniqueInput } from "../../../inputs/SnapshotWhereUniqueInput";
import { SnapshotScalarFieldEnum } from "../../../../enums/SnapshotScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySnapshotArgs {
  @TypeGraphQL.Field(_type => SnapshotWhereInput, {
    nullable: true
  })
  where?: SnapshotWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SnapshotOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SnapshotOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SnapshotWhereUniqueInput, {
    nullable: true
  })
  cursor?: SnapshotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SnapshotScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "versionId" | "s3Url" | "sourceUrl" | "caption"> | undefined;
}
