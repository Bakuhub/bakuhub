import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCreateWithoutSnapshotsInput } from "../inputs/ReferenceCreateWithoutSnapshotsInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.InputType("ReferenceCreateOrConnectWithoutSnapshotsInput", {
  isAbstract: true
})
export class ReferenceCreateOrConnectWithoutSnapshotsInput {
  @TypeGraphQL.Field(_type => ReferenceWhereUniqueInput, {
    nullable: false
  })
  where!: ReferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReferenceCreateWithoutSnapshotsInput, {
    nullable: false
  })
  create!: ReferenceCreateWithoutSnapshotsInput;
}
