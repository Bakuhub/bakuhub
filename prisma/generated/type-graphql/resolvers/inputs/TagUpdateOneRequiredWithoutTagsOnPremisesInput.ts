import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TagCreateOrConnectWithoutTagsOnPremisesInput} from "./TagCreateOrConnectWithoutTagsOnPremisesInput";
import {TagCreateWithoutTagsOnPremisesInput} from "./TagCreateWithoutTagsOnPremisesInput";
import {TagUpdateWithoutTagsOnPremisesInput} from "./TagUpdateWithoutTagsOnPremisesInput";
import {TagUpsertWithoutTagsOnPremisesInput} from "./TagUpsertWithoutTagsOnPremisesInput";
import {TagWhereUniqueInput} from "./TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneRequiredWithoutTagsOnPremisesInput", {
    isAbstract: true
})
export class TagUpdateOneRequiredWithoutTagsOnPremisesInput {
    @TypeGraphQL.Field(_type => TagCreateWithoutTagsOnPremisesInput, {
        nullable: true
    })
    create?: TagCreateWithoutTagsOnPremisesInput | undefined;

    @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTagsOnPremisesInput, {
        nullable: true
    })
    connectOrCreate?: TagCreateOrConnectWithoutTagsOnPremisesInput | undefined;

    @TypeGraphQL.Field(_type => TagUpsertWithoutTagsOnPremisesInput, {
        nullable: true
    })
    upsert?: TagUpsertWithoutTagsOnPremisesInput | undefined;

    @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
        nullable: true
    })
    connect?: TagWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => TagUpdateWithoutTagsOnPremisesInput, {
        nullable: true
    })
    update?: TagUpdateWithoutTagsOnPremisesInput | undefined;
}
