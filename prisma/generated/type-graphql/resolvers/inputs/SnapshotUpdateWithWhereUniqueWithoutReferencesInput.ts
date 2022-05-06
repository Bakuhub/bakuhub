import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotUpdateWithoutReferencesInput } from "../inputs/SnapshotUpdateWithoutReferencesInput";
import { SnapshotWhereUniqueInput } from "../inputs/SnapshotWhereUniqueInput";

@TypeGraphQL.InputType("SnapshotUpdateWithWhereUniqueWithoutReferencesInput", {
  isAbstract: true
})
export class SnapshotUpdateWithWhereUniqueWithoutReferencesInput {
  @TypeGraphQL.Field(_type => SnapshotWhereUniqueInput, {
    nullable: false
  })
  where!: SnapshotWhereUniqueInput;

  @TypeGraphQL.Field(_type => SnapshotUpdateWithoutReferencesInput, {
    nullable: false
  })
  data!: SnapshotUpdateWithoutReferencesInput;
}
