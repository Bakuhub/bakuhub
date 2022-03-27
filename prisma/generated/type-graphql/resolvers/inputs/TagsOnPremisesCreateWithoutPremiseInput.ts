import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagCreateNestedOneWithoutTagsOnPremisesInput} from "./TagCreateNestedOneWithoutTagsOnPremisesInput";

@TypeGraphQL.InputType("TagsOnPremisesCreateWithoutPremiseInput", {
    isAbstract: true
})
export class TagsOnPremisesCreateWithoutPremiseInput {
    @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTagsOnPremisesInput, {
        nullable: false
    })
    tag!: TagCreateNestedOneWithoutTagsOnPremisesInput;

    @TypeGraphQL.Field(_type => Date, {
        nullable: true
    })
    assignedAt?: Date | undefined;
}
