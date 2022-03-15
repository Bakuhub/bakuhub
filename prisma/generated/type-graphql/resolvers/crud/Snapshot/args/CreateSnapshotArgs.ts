import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnapshotCreateInput } from "../../../inputs/SnapshotCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSnapshotArgs {
  @TypeGraphQL.Field(_type => SnapshotCreateInput, {
    nullable: false
  })
  data!: SnapshotCreateInput;
}
