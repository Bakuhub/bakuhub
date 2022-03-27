import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {PremisesOnTimelinesCreateManyTimelineInputEnvelope} from "./PremisesOnTimelinesCreateManyTimelineInputEnvelope";
import {PremisesOnTimelinesCreateOrConnectWithoutTimelineInput} from "./PremisesOnTimelinesCreateOrConnectWithoutTimelineInput";
import {PremisesOnTimelinesCreateWithoutTimelineInput} from "./PremisesOnTimelinesCreateWithoutTimelineInput";
import {PremisesOnTimelinesWhereUniqueInput} from "./PremisesOnTimelinesWhereUniqueInput";

@TypeGraphQL.InputType("PremisesOnTimelinesCreateNestedManyWithoutTimelineInput", {
    isAbstract: true
})
export class PremisesOnTimelinesCreateNestedManyWithoutTimelineInput {
    @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateWithoutTimelineInput], {
        nullable: true
    })
    create?: PremisesOnTimelinesCreateWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateOrConnectWithoutTimelineInput], {
        nullable: true
    })
    connectOrCreate?: PremisesOnTimelinesCreateOrConnectWithoutTimelineInput[] | undefined;

    @TypeGraphQL.Field(_type => PremisesOnTimelinesCreateManyTimelineInputEnvelope, {
        nullable: true
    })
    createMany?: PremisesOnTimelinesCreateManyTimelineInputEnvelope | undefined;

    @TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    })
    connect?: PremisesOnTimelinesWhereUniqueInput[] | undefined;
}
