import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnapshotCreateInput } from "../../../inputs/SnapshotCreateInput";
import { SnapshotUpdateInput } from "../../../inputs/SnapshotUpdateInput";
import { SnapshotWhereUniqueInput } from "../../../inputs/SnapshotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSnapshotArgs {
  @TypeGraphQL.Field(_type => SnapshotWhereUniqueInput, {
    nullable: false
  })
  where!: SnapshotWhereUniqueInput;

  @TypeGraphQL.Field(_type => SnapshotCreateInput, {
    nullable: false
  })
  create!: SnapshotCreateInput;

  @TypeGraphQL.Field(_type => SnapshotUpdateInput, {
    nullable: false
  })
  update!: SnapshotUpdateInput;
}
