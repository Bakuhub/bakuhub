import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremiseCreateOrConnectWithoutPremisesOnTimelinesInput} from "./PremiseCreateOrConnectWithoutPremisesOnTimelinesInput";
import {PremiseCreateWithoutPremisesOnTimelinesInput} from "./PremiseCreateWithoutPremisesOnTimelinesInput";
import {PremiseUpdateWithoutPremisesOnTimelinesInput} from "./PremiseUpdateWithoutPremisesOnTimelinesInput";
import {PremiseUpsertWithoutPremisesOnTimelinesInput} from "./PremiseUpsertWithoutPremisesOnTimelinesInput";
import {PremiseWhereUniqueInput} from "./PremiseWhereUniqueInput";

@TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput", {
    isAbstract: true
})
export class PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput {
    @TypeGraphQL.Field(_type => PremiseCreateWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    create?: PremiseCreateWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    connectOrCreate?: PremiseCreateOrConnectWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpsertWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    upsert?: PremiseUpsertWithoutPremisesOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => PremiseWhereUniqueInput, {
        nullable: true
    })
    connect?: PremiseWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => PremiseUpdateWithoutPremisesOnTimelinesInput, {
        nullable: true
    })
    update?: PremiseUpdateWithoutPremisesOnTimelinesInput | undefined;
}
