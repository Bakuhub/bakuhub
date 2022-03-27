import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCreateOrConnectWithoutSnapshotsInput } from "../inputs/ReferenceCreateOrConnectWithoutSnapshotsInput";
import { ReferenceCreateWithoutSnapshotsInput } from "../inputs/ReferenceCreateWithoutSnapshotsInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.InputType("ReferenceCreateNestedManyWithoutSnapshotsInput", {
  isAbstract: true
})
export class ReferenceCreateNestedManyWithoutSnapshotsInput {
  @TypeGraphQL.Field(_type => [ReferenceCreateWithoutSnapshotsInput], {
    nullable: true
  })
  create?: ReferenceCreateWithoutSnapshotsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceCreateOrConnectWithoutSnapshotsInput], {
    nullable: true
  })
  connectOrCreate?: ReferenceCreateOrConnectWithoutSnapshotsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput], {
    nullable: true
  })
  connect?: ReferenceWhereUniqueInput[] | undefined;
}
