import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotCreateWithoutReferencesInput } from "../inputs/SnapshotCreateWithoutReferencesInput";
import { SnapshotWhereUniqueInput } from "../inputs/SnapshotWhereUniqueInput";

@TypeGraphQL.InputType("SnapshotCreateOrConnectWithoutReferencesInput", {
  isAbstract: true
})
export class SnapshotCreateOrConnectWithoutReferencesInput {
  @TypeGraphQL.Field(_type => SnapshotWhereUniqueInput, {
    nullable: false
  })
  where!: SnapshotWhereUniqueInput;

  @TypeGraphQL.Field(_type => SnapshotCreateWithoutReferencesInput, {
    nullable: false
  })
  create!: SnapshotCreateWithoutReferencesInput;
}
