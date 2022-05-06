import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnapshotUpdateManyMutationInput } from "../../../inputs/SnapshotUpdateManyMutationInput";
import { SnapshotWhereInput } from "../../../inputs/SnapshotWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySnapshotArgs {
  @TypeGraphQL.Field(_type => SnapshotUpdateManyMutationInput, {
    nullable: false
  })
  data!: SnapshotUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SnapshotWhereInput, {
    nullable: true
  })
  where?: SnapshotWhereInput | undefined;
}
