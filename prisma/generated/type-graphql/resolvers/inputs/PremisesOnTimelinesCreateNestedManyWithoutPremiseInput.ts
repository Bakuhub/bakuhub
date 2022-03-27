import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCreateManyPremiseInputEnvelope} from "./PremisesOnTimelinesCreateManyPremiseInputEnvelope";
import {PremisesOnTimelinesCreateOrConnectWithoutPremiseInput} from "./PremisesOnTimelinesCreateOrConnectWithoutPremiseInput";
import {PremisesOnTimelinesCreateWithoutPremiseInput} from "./PremisesOnTimelinesCreateWithoutPremiseInput";
import {PremisesOnTimelinesWhereUniqueInput} from "./PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateNestedManyWithoutPremiseInput", {
    isAbstract: true
})
export class PremisesOnTimelinesCreateNestedManyWithoutPremiseInput {
    @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateWithoutPremiseInput], {
        nullable: true
    })
    create?: PremisesOnTimelinesCreateWithoutPremiseInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateOrConnectWithoutPremiseInput], {
        nullable: true
    })
    connectOrCreate?: PremisesOnTimelinesCreateOrConnectWithoutPremiseInput[] | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateManyPremiseInputEnvelope, {
        nullable: true
    })
    createMany?: PremisesOnTimelinesCreateManyPremiseInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    connect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
}
