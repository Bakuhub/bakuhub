import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnapshotWhereInput } from "../../../inputs/SnapshotWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySnapshotArgs {
  @TypeGraphQL.Field(_type => SnapshotWhereInput, {
    nullable: true
  })
  where?: SnapshotWhereInput | undefined;
}
