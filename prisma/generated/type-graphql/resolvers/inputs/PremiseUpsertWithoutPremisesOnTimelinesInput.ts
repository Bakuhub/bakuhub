import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateWithoutPremisesOnTimelinesInput} from "./PremiseCreateWithoutPremisesOnTimelinesInput";
import {PremiseUpdateWithoutPremisesOnTimelinesInput} from "./PremiseUpdateWithoutPremisesOnTimelinesInput";

@TypeGraphQL.InputType("PremiseUpsertWithoutPremisesOnTimelinesInput", {
    isAbstract: true
})
export class PremiseUpsertWithoutPremisesOnTimelinesInput {
    @TypeGraphQL.Field(_type => PremiseUpdateWithoutPremisesOnTimelinesInput, {
        nullable: false
    })
    update!: PremiseUpdateWithoutPremisesOnTimelinesInput;

    @TypeGraphQL.Field(_type => PremiseCreateWithoutPremisesOnTimelinesInput, {
        nullable: false
    })
    create!: PremiseCreateWithoutPremisesOnTimelinesInput;
}
