import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferenceCreateOrConnectWithoutSnapshotsInput } from "../inputs/ReferenceCreateOrConnectWithoutSnapshotsInput";
import { ReferenceCreateWithoutSnapshotsInput } from "../inputs/ReferenceCreateWithoutSnapshotsInput";
import { ReferenceScalarWhereInput } from "../inputs/ReferenceScalarWhereInput";
import { ReferenceUpdateManyWithWhereWithoutSnapshotsInput } from "../inputs/ReferenceUpdateManyWithWhereWithoutSnapshotsInput";
import { ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput } from "../inputs/ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput";
import { ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput } from "../inputs/ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput";
import { ReferenceWhereUniqueInput } from "../inputs/ReferenceWhereUniqueInput";

@TypeGraphQL.InputType("ReferenceUpdateManyWithoutSnapshotsInput", {
  isAbstract: true
})
export class ReferenceUpdateManyWithoutSnapshotsInput {
  @TypeGraphQL.Field(_type => [ReferenceCreateWithoutSnapshotsInput], {
    nullable: true
  })
  create?: ReferenceCreateWithoutSnapshotsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceCreateOrConnectWithoutSnapshotsInput], {
    nullable: true
  })
  connectOrCreate?: ReferenceCreateOrConnectWithoutSnapshotsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput], {
    nullable: true
  })
  upsert?: ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput], {
    nullable: true
  })
  set?: ReferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput], {
    nullable: true
  })
  delete?: ReferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput], {
    nullable: true
  })
  connect?: ReferenceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput], {
    nullable: true
  })
  update?: ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceUpdateManyWithWhereWithoutSnapshotsInput], {
    nullable: true
  })
  updateMany?: ReferenceUpdateManyWithWhereWithoutSnapshotsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferenceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReferenceScalarWhereInput[] | undefined;
}
