import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateOrConnectWithoutTagsOnPremisesInput} from "./PremiseCreateOrConnectWithoutTagsOnPremisesInput";
import {PremiseCreateWithoutTagsOnPremisesInput} from "./PremiseCreateWithoutTagsOnPremisesInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateNestedOneWithoutTagsOnPremisesInput", {
    isAbstract: true
})
export class PremiseCreateNestedOneWithoutTagsOnPremisesInput {
    @TypeGraphQL.Field(_type => PremiseCreateWithoutTagsOnPremisesInput, {
        nullable: true
    })
    create?: PremiseCreateWithoutTagsOnPremisesInput | undefined;

    @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutTagsOnPremisesInput, {
        nullable: true
    })
    connectOrCreate?: PremiseCreateOrConnectWithoutTagsOnPremisesInput | undefined;

    @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
        nullable: true
    })
    connect?: PremiseWhereUniqueInput | undefined;
}
