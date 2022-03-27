import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesCreateManyPremiseInputEnvelope } from "../inputs/TagsOnPremisesCreateManyPremiseInputEnvelope";
import { TagsOnPremisesCreateOrConnectWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateOrConnectWithoutPremiseInput";
import { TagsOnPremisesCreateWithoutPremiseInput } from "../inputs/TagsOnPremisesCreateWithoutPremiseInput";
import { TagsOnPremisesWhereUniqueInput } from "../inputs/TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesCreateNestedManyWithoutPremiseInput", {
  isAbstract: true
})
export class TagsOnPremisesCreateNestedManyWithoutPremiseInput {
  @TypeGraphQL.Field(_type => [TagsOnPremisesCreateWithoutPremiseInput], {
    nullable: true
  })
  create?: TagsOnPremisesCreateWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesCreateOrConnectWithoutPremiseInput], {
    nullable: true
  })
  connectOrCreate?: TagsOnPremisesCreateOrConnectWithoutPremiseInput[] | undefined;

  @TypeGraphQL.Field(_type => TagsOnPremisesCreateManyPremiseInputEnvelope, {
    nullable: true
  })
  createMany?: TagsOnPremisesCreateManyPremiseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput], {
    nullable: true
  })
  connect?: TagsOnPremisesWhereUniqueInput[] | undefined;
}
