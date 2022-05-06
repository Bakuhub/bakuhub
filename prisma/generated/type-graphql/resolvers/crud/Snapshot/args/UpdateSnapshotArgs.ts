import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnapshotUpdateInput } from "../../../inputs/SnapshotUpdateInput";
import { SnapshotWhereUniqueInput } from "../../../inputs/SnapshotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSnapshotArgs {
  @TypeGraphQL.Field(_type => SnapshotUpdateInput, {
    nullable: false
  })
  data!: SnapshotUpdateInput;

  @TypeGraphQL.Field(_type => SnapshotWhereUniqueInput, {
    nullable: false
  })
  where!: SnapshotWhereUniqueInput;
}
