import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesCreateManyTagInputEnvelope } from "../inputs/TagsOnTimelinesCreateManyTagInputEnvelope";
import { TagsOnTimelinesCreateOrConnectWithoutTagInput } from "../inputs/TagsOnTimelinesCreateOrConnectWithoutTagInput";
import { TagsOnTimelinesCreateWithoutTagInput } from "../inputs/TagsOnTimelinesCreateWithoutTagInput";
import { TagsOnTimelinesScalarWhereInput } from "../inputs/TagsOnTimelinesScalarWhereInput";
import { TagsOnTimelinesUpdateManyWithWhereWithoutTagInput } from "../inputs/TagsOnTimelinesUpdateManyWithWhereWithoutTagInput";
import { TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput";
import { TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesUpdateManyWithoutTagInput", {
  isAbstract: true
})
export class TagsOnTimelinesUpdateManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateWithoutTagInput], {
    nullable: true
  })
  create?: TagsOnTimelinesCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: TagsOnTimelinesCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: TagsOnTimelinesUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: TagsOnTimelinesCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  set?: TagsOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TagsOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  delete?: TagsOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: TagsOnTimelinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: TagsOnTimelinesUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: TagsOnTimelinesUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TagsOnTimelinesScalarWhereInput[] | undefined;
}
