import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnPremisesCreateWithoutPremiseInput} from "./TagsOnPremisesCreateWithoutPremiseInput";
import {TagsOnPremisesUpdateWithoutPremiseInput} from "./TagsOnPremisesUpdateWithoutPremiseInput";
import {TagsOnPremisesWhereUniqueInput} from "./TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput", {
    isAbstract: true
})
export class TagsOnPremisesUpsertWithWhereUniqueWithoutPremiseInput {
    @TypeGraphQL.Field(_type => TagsOnPremisesWhereUniqueInput, {
        nullable: false
    })
    where!: TagsOnPremisesWhereUniqueInput;

    @TypeGraphQL.Field(_type => TagsOnPremisesUpdateWithoutPremiseInput, {
        nullable: false
    })
    update!: TagsOnPremisesUpdateWithoutPremiseInput;

    @TypeGraphQL.Field(_type => TagsOnPremisesCreateWithoutPremiseInput, {
        nullable: false
    })
    create!: TagsOnPremisesCreateWithoutPremiseInput;
}
