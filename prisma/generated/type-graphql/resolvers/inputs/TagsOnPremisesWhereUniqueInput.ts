import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagsOnPremisesTagIdPremiseIdCompoundUniqueInput } from "../inputs/TagsOnPremisesTagIdPremiseIdCompoundUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesWhereUniqueInput", {
  isAbstract: true
})
export class TagsOnPremisesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TagsOnPremisesTagIdPremiseIdCompoundUniqueInput, {
    nullable: true
  })
  tagId_premiseId?: TagsOnPremisesTagIdPremiseIdCompoundUniqueInput | undefined;
}
