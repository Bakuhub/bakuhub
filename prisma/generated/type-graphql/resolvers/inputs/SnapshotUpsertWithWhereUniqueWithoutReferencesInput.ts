import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotCreateWithoutReferencesInput } from "../inputs/SnapshotCreateWithoutReferencesInput";
import { SnapshotUpdateWithoutReferencesInput } from "../inputs/SnapshotUpdateWithoutReferencesInput";
import { SnapshotWhereUniqueInput } from "../inputs/SnapshotWhereUniqueInput";

@TypeGraphQL.InputType("SnapshotUpsertWithWhereUniqueWithoutReferencesInput", {
  isAbstract: true
})
export class SnapshotUpsertWithWhereUniqueWithoutReferencesInput {
  @TypeGraphQL.Field(_type => SnapshotWhereUniqueInput, {
    nullable: false
  })
  where!: SnapshotWhereUniqueInput;

  @TypeGraphQL.Field(_type => SnapshotUpdateWithoutReferencesInput, {
    nullable: false
  })
  update!: SnapshotUpdateWithoutReferencesInput;

  @TypeGraphQL.Field(_type => SnapshotCreateWithoutReferencesInput, {
    nullable: false
  })
  create!: SnapshotCreateWithoutReferencesInput;
}
