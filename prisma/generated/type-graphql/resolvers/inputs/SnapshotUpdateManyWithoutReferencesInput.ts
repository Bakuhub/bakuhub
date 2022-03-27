import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SnapshotCreateOrConnectWithoutReferencesInput } from "../inputs/SnapshotCreateOrConnectWithoutReferencesInput";
import { SnapshotCreateWithoutReferencesInput } from "../inputs/SnapshotCreateWithoutReferencesInput";
import { SnapshotScalarWhereInput } from "../inputs/SnapshotScalarWhereInput";
import { SnapshotUpdateManyWithWhereWithoutReferencesInput } from "../inputs/SnapshotUpdateManyWithWhereWithoutReferencesInput";
import { SnapshotUpdateWithWhereUniqueWithoutReferencesInput } from "../inputs/SnapshotUpdateWithWhereUniqueWithoutReferencesInput";
import { SnapshotUpsertWithWhereUniqueWithoutReferencesInput } from "../inputs/SnapshotUpsertWithWhereUniqueWithoutReferencesInput";
import { SnapshotWhereUniqueInput } from "../inputs/SnapshotWhereUniqueInput";

@TypeGraphQL.InputType("SnapshotUpdateManyWithoutReferencesInput", {
  isAbstract: true
})
export class SnapshotUpdateManyWithoutReferencesInput {
  @TypeGraphQL.Field(_type => [SnapshotCreateWithoutReferencesInput], {
    nullable: true
  })
  create?: SnapshotCreateWithoutReferencesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotCreateOrConnectWithoutReferencesInput], {
    nullable: true
  })
  connectOrCreate?: SnapshotCreateOrConnectWithoutReferencesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotUpsertWithWhereUniqueWithoutReferencesInput], {
    nullable: true
  })
  upsert?: SnapshotUpsertWithWhereUniqueWithoutReferencesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput], {
    nullable: true
  })
  set?: SnapshotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SnapshotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput], {
    nullable: true
  })
  delete?: SnapshotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput], {
    nullable: true
  })
  connect?: SnapshotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotUpdateWithWhereUniqueWithoutReferencesInput], {
    nullable: true
  })
  update?: SnapshotUpdateWithWhereUniqueWithoutReferencesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotUpdateManyWithWhereWithoutReferencesInput], {
    nullable: true
  })
  updateMany?: SnapshotUpdateManyWithWhereWithoutReferencesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnapshotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SnapshotScalarWhereInput[] | undefined;
}
