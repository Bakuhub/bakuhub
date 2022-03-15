import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnapshotCreateManyInput } from "../../../inputs/SnapshotCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySnapshotArgs {
  @TypeGraphQL.Field(_type => [SnapshotCreateManyInput], {
    nullable: false
  })
  data!: SnapshotCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
