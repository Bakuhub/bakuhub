import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnPremisesScalarWhereInput} from "./TagsOnPremisesScalarWhereInput";
import {TagsOnPremisesUpdateManyMutationInput} from "./TagsOnPremisesUpdateManyMutationInput";

@TypeGraphQL.InputType("TagsOnPremisesUpdateManyWithWhereWithoutTagInput", {
    isAbstract: true
})
export class TagsOnPremisesUpdateManyWithWhereWithoutTagInput {
    @TypeGraphQL.Field(_type => TagsOnPremisesScalarWhereInput, {
        nullable: false
    })
    where!: TagsOnPremisesScalarWhereInput;

    @TypeGraphQL.Field(_type => TagsOnPremisesUpdateManyMutationInput, {
        nullable: false
    })
    data!: TagsOnPremisesUpdateManyMutationInput;
}
