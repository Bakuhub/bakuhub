import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateOrConnectWithoutTagsOnTimelinesInput} from "./TimelineCreateOrConnectWithoutTagsOnTimelinesInput";
import {TimelineCreateWithoutTagsOnTimelinesInput} from "./TimelineCreateWithoutTagsOnTimelinesInput";
import {TimelineWhereUniqueInput} from "./TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineCreateNestedOneWithoutTagsOnTimelinesInput", {
    isAbstract: true
})
export class TimelineCreateNestedOneWithoutTagsOnTimelinesInput {
    @TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    create?: TimelineCreateWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    connectOrCreate?: TimelineCreateOrConnectWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
        nullable: true
    })
    connect?: TimelineWhereUniqueInput | undefined;
}
