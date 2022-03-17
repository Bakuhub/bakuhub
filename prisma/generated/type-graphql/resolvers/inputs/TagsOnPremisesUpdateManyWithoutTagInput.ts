import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateManyTagInputEnvelope } from "../inputs/TagsOnPremisesCreateManyTagInputEnvelope";
import { TagsOnPremisesCreateOrConnectWithoutTagInput } from "../inputs/TagsOnPremisesCreateOrConnectWithoutTagInput";
import { TagsOnPremisesCreateWithoutTagInput } from "../inputs/TagsOnPremisesCreateWithoutTagInput";
import { TagsOnPremisesScalarWhereInput } from "../inputs/TagsOnPremisesScalarWhereInput";
import { TagsOnPremisesUpdateManyWithWhereWithoutTagInput } from "../inputs/TagsOnPremisesUpdateManyWithWhereWithoutTagInput";
import { TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput";
import { TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesUpdateManyWithoutTagInput", {
  isAbstract: true
})
export class TagsOnPremisesUpdateManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [TagsOnPremisesCreateWithoutTagInput], {
    nullable: true
  })
  create?: TagsOnPremisesCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: TagsOnPremisesCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: TagsOnPremisesUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: TagsOnPremisesCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  set?: TagsOnPremisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TagsOnPremisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  delete?: TagsOnPremisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  connect?: TagsOnPremisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: TagsOnPremisesUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: TagsOnPremisesUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagsOnPremisesScalarWhereInput[] | undefined;
}