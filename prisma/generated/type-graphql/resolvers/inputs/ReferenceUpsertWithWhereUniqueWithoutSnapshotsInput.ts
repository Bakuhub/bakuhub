import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCreateWithoutSnapshotsInput } from "../inputs/ReferenceCreateWithoutSnapshotsInput";
import { ReferenceUpdateWithoutSnapshotsInput } from "../inputs/ReferenceUpdateWithoutSnapshotsInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.InputType("ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput", {
  isAbstract: true
})
export class ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput {
  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: false
  })
  where!: ReferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReferenceUpdateWithoutSnapshotsInput, {
    nullable: false
  })
  update!: ReferenceUpdateWithoutSnapshotsInput;

  @TypeGraphQL.Field(_type => ReferenceCreateWithoutSnapshotsInput, {
    nullable: false
  })
  create!: ReferenceCreateWithoutSnapshotsInput;
}
