import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotCreateOrConnectWithoutReferencesInput } from "../inputs/SnapshotCreateOrConnectWithoutReferencesInput";
import { SnapshotCreateWithoutReferencesInput } from "../inputs/SnapshotCreateWithoutReferencesInput";
import { SnapshotWhereUniqueInput } from "../inputs/SnapshotWhereUniqueInput";

@TypeGraphQL.InputType("SnapshotCreateNestedManyWithoutReferencesInput", {
  isAbstract: true
})
export class SnapshotCreateNestedManyWithoutReferencesInput {
  @TypeGraphQL.Field(_type => [SnapshotCreateWithoutReferencesInput], {
    nullable: true
  })
  create?: SnapshotCreateWithoutReferencesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotCreateOrConnectWithoutReferencesInput], {
    nullable: true
  })
  connectOrCreate?: SnapshotCreateOrConnectWithoutReferencesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput], {
    nullable: true
  })
  connect?: SnapshotWhereUniqueInput[] | undefined;
}
