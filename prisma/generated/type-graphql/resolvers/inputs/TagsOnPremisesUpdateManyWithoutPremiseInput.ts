import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateManyPremiseInputEnvelope } from "../inputs/TagsOnPremisesCreateManyPremiseInputEnvelope";
import { TagsOnPremisesCreateOrConnectWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateOrConnectWithoutPremiseInput";
import { TagsOnPremisesCreateWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateWithoutPremiseInput";
import { TagsOnPremisesScalarWhereInput } from "../inputs/TagsOnPremisesScalarWhereInput";
import { TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput";
import { TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput } from "../inputs/TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput";
import { TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput } from "../inputs/TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesUpdateManyWithoutPremiseInput", {
  isAbstract: true
})
export class TagsOnPremisesUpdateManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [TagsOnPremisesCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: TagsOnPremisesCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: TagsOnPremisesCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  upsert?: TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: TagsOnPremisesCreateManyPremiseInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput], {
    nullable: true
  })
  update?: TagsOnPremisesUpdateWithWhereUniqueWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput], {
    nullable: true
  })
  updateMany?: TagsOnPremisesUpdateManyWithWhereWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagsOnPremisesScalarWhereInput[] | undefined;
}
