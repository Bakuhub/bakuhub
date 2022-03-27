import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceUpdateWithoutSnapshotsInput } from "../inputs/ReferenceUpdateWithoutSnapshotsInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.InputType("ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput", {
  isAbstract: true
})
export class ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput {
  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: false
  })
  where!: ReferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReferenceUpdateWithoutSnapshotsInput, {
    nullable: false
  })
  data!: ReferenceUpdateWithoutSnapshotsInput;
}
