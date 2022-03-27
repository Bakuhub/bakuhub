import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagCreateOrConnectWithoutTagsOnTimelinesInput} from "./TagCreateOrConnectWithoutTagsOnTimelinesInput";
import {TagCreateWithoutTagsOnTimelinesInput} from "./TagCreateWithoutTagsOnTimelinesInput";
import {TagWhereUniqueInput} from "./TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutTagsOnTimelinesInput", {
    isAbstract: true
})
export class TagCreateNestedOneWithoutTagsOnTimelinesInput {
    @TypeGraphQL.Field(_type => TagCreateWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    create?: TagCreateWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
        nullable: true
    })
    connect?: TagWhereUniqueInput | undefined;
}
