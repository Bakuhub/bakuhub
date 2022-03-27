import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotScalarWhereInput } from "../inputs/SnapshotScalarWhereInput";
import { SnapshotUpdateManyMutationInput } from "../inputs/SnapshotUpdateManyMutationInput";

@TypeGraphQL.InputType("SnapshotUpdateManyWithWhereWithoutReferencesInput", {
  isAbstract: true
})
export class SnapshotUpdateManyWithWhereWithoutReferencesInput {
  @TypeGraphQL.Field(_type => SnapshotScalarWhereInput, {
    nullable: false
  })
  where!: SnapshotScalarWhereInput;

  @TypeGraphQL.Field(_type => SnapshotUpdateManyMutationInput, {
    nullable: false
  })
  data!: SnapshotUpdateManyMutationInput;
}
