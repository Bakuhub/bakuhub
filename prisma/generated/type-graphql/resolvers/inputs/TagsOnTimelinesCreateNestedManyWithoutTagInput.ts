import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnTimelinesCreateManyTagInputEnvelope } from "../inputs/TagsOnTimelinesCreateManyTagInputEnvelope";
import { TagsOnTimelinesCreateOrConnectWithoutTagInput } from "../inputs/TagsOnTimelinesCreateOrConnectWithoutTagInput";
import { TagsOnTimelinesCreateWithoutTagInput } from "../inputs/TagsOnTimelinesCreateWithoutTagInput";
import { TagsOnTimelinesWhereUniqueInput } from "../inputs/TagsOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnTimelinesCreateNestedManyWithoutTagInput", {
  isAbstract: true
})
export class TagsOnTimelinesCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateWithoutTagInput], {
    nullable: true
  })
  create?: TagsOnTimelinesCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: TagsOnTimelinesCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnTimelinesCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: TagsOnTimelinesCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagsOnTimelinesWhereUniqueInput], {
    nullable: true
  })
  connect?: TagsOnTimelinesWhereUniqueInput[] | undefined;
}
