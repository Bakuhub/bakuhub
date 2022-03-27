import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateWithoutPremisesOnTimelinesInput} from "./PremiseCreateWithoutPremisesOnTimelinesInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseCreateOrConnectWithoutPremisesOnTimelinesInput", {
    isAbstract: true
})
export class PremiseCreateOrConnectWithoutPremisesOnTimelinesInput {
    @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
        nullable: false
    })
    where!: PremiseWhereUniqueInput;

    @TypeGraphQL.Field(_type => PremiseCreateWithoutPremisesOnTimelinesInput, {
        nullable: false
    })
    create!: PremiseCreateWithoutPremisesOnTimelinesInput;
}
