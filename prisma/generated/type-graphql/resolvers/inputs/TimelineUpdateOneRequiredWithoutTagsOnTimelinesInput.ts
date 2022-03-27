import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {Prisma} from "@prisma/client";
import {DecimalJSScalar} from "../../scalars";
import {TimelineCreateOrConnectWithoutTagsOnTimelinesInput} from "./TimelineCreateOrConnectWithoutTagsOnTimelinesInput";
import {TimelineCreateWithoutTagsOnTimelinesInput} from "./TimelineCreateWithoutTagsOnTimelinesInput";
import {TimelineUpdateWithoutTagsOnTimelinesInput} from "./TimelineUpdateWithoutTagsOnTimelinesInput";
import {TimelineUpsertWithoutTagsOnTimelinesInput} from "./TimelineUpsertWithoutTagsOnTimelinesInput";
import {TimelineWhereUniqueInput} from "./TimelineWhereUniqueInput";

@TypeGraphQL.InputType("TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput", {
    isAbstract: true
})
export class TimelineUpdateOneRequiredWithoutTagsOnTimelinesInput {
    @TypeGraphQL.Field(_type => TimelineCreateWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    create?: TimelineCreateWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineCreateOrConnectWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    connectOrCreate?: TimelineCreateOrConnectWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineUpsertWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    upsert?: TimelineUpsertWithoutTagsOnTimelinesInput | undefined;

    @TypeGraphQL.Field(_type => TimelineWhereUniqueInput, {
        nullable: true
    })
    connect?: TimelineWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => TimelineUpdateWithoutTagsOnTimelinesInput, {
        nullable: true
    })
    update?: TimelineUpdateWithoutTagsOnTimelinesInput | undefined;
}
