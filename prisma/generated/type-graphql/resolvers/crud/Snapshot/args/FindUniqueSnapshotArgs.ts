import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnapshotWhereUniqueInput } from "../../../inputs/SnapshotWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSnapshotArgs {
  @TypeGraphQL.Field(_type => SnapshotWhereUniqueInput, {
    nullable: false
  })
  where!: SnapshotWhereUniqueInput;
}
