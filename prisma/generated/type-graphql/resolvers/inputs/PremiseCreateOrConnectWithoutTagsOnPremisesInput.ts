import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateWithoutTagsOnPremisesInput} from "./PremiseCreateWithoutTagsOnPremisesInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateOrConnectWithoutTagsOnPremisesInput", {
    isAbstract: true
})
export class PremiseCreateOrConnectWithoutTagsOnPremisesInput {
    @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
        nullable: false
    })
    where!: PremiseWhereUniqueInput;

    @TypeGraphQL.Field(_type => PremiseCreateWithoutTagsOnPremisesInput, {
        nullable: false
    })
    create!: PremiseCreateWithoutTagsOnPremisesInput;
}
