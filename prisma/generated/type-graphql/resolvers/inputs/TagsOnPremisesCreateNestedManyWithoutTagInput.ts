import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagsOnPremisesCreateManyTagInputEnvelope} from "./TagsOnPremisesCreateManyTagInputEnvelope";
import {TagsOnPremisesCreateOrConnectWithoutTagInput} from "./TagsOnPremisesCreateOrConnectWithoutTagInput";
import {TagsOnPremisesCreateWithoutTagInput} from "./TagsOnPremisesCreateWithoutTagInput";
import {TagsOnPremisesWhereUniqueInput} from "./TagsOnPremisesWhereUniqueInput";

@TypeGraphQL.InputType("TagsOnPremisesCreateNestedManyWithoutTagInput", {
    isAbstract: true
})
export class TagsOnPremisesCreateNestedManyWithoutTagInput {
    @TypeGraphQL.Field(_type => [TagsOnPremisesCreateWithoutTagInput], {
        nullable: true
    })
    create?: TagsOnPremisesCreateWithoutTagInput[] | undefined;

    @TypeGraphQL.Field(_type => [TagsOnPremisesCreateOrConnectWithoutTagInput], {
        nullable: true
    })
    connectOrCreate?: TagsOnPremisesCreateOrConnectWithoutTagInput[] | undefined;

    @TypeGraphQL.Field(_type => TagsOnPremisesCreateManyTagInputEnvelope, {
        nullable: true
    })
    createMany?: TagsOnPremisesCreateManyTagInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [TagsOnPremisesWhereUniqueInput], {
        nullable: true
    })
    connect?: TagsOnPremisesWhereUniqueInput[] | undefined;
}
